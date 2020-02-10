import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { mergeMap, map, filter, catchError } from 'rxjs/operators';
import { Action } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import withServerApi from '../utils/withServerApi';
import { FeedbackItem } from '../models';

const actionCreator = actionCreatorFactory('FEEDBACK');
const postHeaders = { 'content-type': 'application/json; charset=utf-8' };

export const feedbackPost = actionCreator<FeedbackItem>('POST');
export const feedbackPosted = actionCreator('POSTED');
export const feedbackPostFailed = actionCreator('FAILED');

const epic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(feedbackPost.match),
    mergeMap(action =>
      ajax.post(withServerApi('/feedback'), action.payload, postHeaders).pipe(
        map(() => feedbackPosted()),
        catchError(() => of(feedbackPostFailed()))
      )
    )
  );

export default epic;
