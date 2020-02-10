import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { mergeMap, map, filter, catchError } from 'rxjs/operators';
import { Action } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { FeedbackTrends } from '../models/feedbackTrends';
import withServerApi from '../utils/withServerApi';

const actionCreator = actionCreatorFactory('FEEDBACK_TRENDS');

export const feedbackTrendsLoad = actionCreator('LOAD');
export const feedbackTrendsLoadFailed = actionCreator('LOAD_FAILED');
export const feedbackTrendsLoaded = actionCreator<{ data: FeedbackTrends }>('LOADED');

const epic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(feedbackTrendsLoad.match),
    mergeMap(() =>
      ajax.getJSON<FeedbackTrends>(withServerApi('/feedback/trends')).pipe(
        map(data => feedbackTrendsLoaded({ data })),
        catchError(() => of(feedbackTrendsLoadFailed()))
      )
    )
  );

export default epic;
