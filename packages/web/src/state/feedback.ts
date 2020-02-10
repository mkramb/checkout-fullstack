import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { RequestState } from '../models';
import { feedbackPost, feedbackPosted, feedbackPostFailed } from '../middlewares/feedback';

export const defaultItemsState = {
  request: RequestState.None,
};

export interface FeedbackState {
  request: RequestState;
}

const reducer = (state: FeedbackState = defaultItemsState, action: Action): FeedbackState => {
  if (isType(action, feedbackPost)) return { ...state, request: RequestState.Fetching };
  if (isType(action, feedbackPosted)) return { ...state, request: RequestState.None };
  if (isType(action, feedbackPostFailed)) return { ...state, request: RequestState.Failed };

  return state;
};

export default reducer;
