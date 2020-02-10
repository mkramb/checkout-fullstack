import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { mergeMap, map, filter, catchError } from 'rxjs/operators';
import { Action } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { FeedbackItem } from '../models';
import withServerApi from '../utils/withServerApi';
import { feedbackPosted } from './feedback';

const actionCreator = actionCreatorFactory('FEEDBACK_LIST');

export const feedbackListLoad = actionCreator('LOAD');
export const feedbackListLoadFailed = actionCreator('LOAD_FAILED');
export const feedbackListLoaded = actionCreator<{ data: FeedbackItem[] }>('LIST_LOADED');

const epic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(action => feedbackListLoad.match(action) || feedbackPosted.match(action)),
    mergeMap(() =>
      ajax.getJSON<FeedbackItem[]>(withServerApi('/feedback')).pipe(
        map(data => feedbackListLoaded({ data })),
        catchError(() => of(feedbackListLoadFailed()))
      )
    )
  );

export default epic;
