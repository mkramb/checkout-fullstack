import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { createSelector } from 'reselect';
import { FeedbackTrends, FeedbackTrendsChartItem, RequestState } from '../models';
import { feedbackTrendsLoad, feedbackTrendsLoaded, feedbackTrendsLoadFailed } from '../middlewares/feedbackTrends';
import { ApplicationState } from '../state';

export const defaultItemsState = {
  request: RequestState.None,
  data: [],
};

export interface FeedbackTrendsState {
  request: RequestState;
  data: FeedbackTrends;
}

const reducer = (state: FeedbackTrendsState = defaultItemsState, action: Action): FeedbackTrendsState => {
  if (isType(action, feedbackTrendsLoad)) return { ...state, request: RequestState.Fetching, data: [] };
  if (isType(action, feedbackTrendsLoaded)) return { ...state, request: RequestState.None, data: action.payload.data };
  if (isType(action, feedbackTrendsLoadFailed)) return { ...state, request: RequestState.Failed, data: [] };

  return state;
};

export const getTrendsItems = (state: ApplicationState) => state.feedbackTrends.data;

export const getTrendsChartItems = createSelector(getTrendsItems, items => {
  return Object.keys(items).map(rating => ({
    name: `Rating ${rating}`,
    value: items[rating],
  })) as FeedbackTrendsChartItem[];
});

export default reducer;
