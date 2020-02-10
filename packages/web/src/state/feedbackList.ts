import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { FeedbackItem, RequestState } from '../models';
import { feedbackListLoad, feedbackListLoaded, feedbackListLoadFailed } from '../middlewares/feedbackList';

export const defaultItemsState = {
  request: RequestState.None,
  data: [],
};

export interface FeedbackListState {
  request: RequestState;
  data: FeedbackItem[];
}

const reducer = (state: FeedbackListState = defaultItemsState, action: Action): FeedbackListState => {
  if (isType(action, feedbackListLoad)) return { ...state, request: RequestState.Fetching, data: [] };
  if (isType(action, feedbackListLoaded)) return { ...state, request: RequestState.None, data: action.payload.data };
  if (isType(action, feedbackListLoadFailed)) return { ...state, request: RequestState.Failed, data: [] };

  return state;
};

export default reducer;
