import reducer, { defaultItemsState } from './feedbackTrends';
import { feedbackTrendsLoad, feedbackTrendsLoaded, feedbackTrendsLoadFailed } from '../middlewares/feedbackTrends';
import { RequestState, FeedbackTrends } from '../models';

describe('state/feedbackTrends', () => {
  const trends = {
    1: 2,
    5: 10,
  } as FeedbackTrends;

  it('should be able to start fetching data', () => {
    expect(reducer(defaultItemsState, feedbackTrendsLoad())).toEqual({
      ...defaultItemsState,
      request: RequestState.Fetching,
    });
  });

  it('should be able to stop fetching data', () => {
    expect(reducer(defaultItemsState, feedbackTrendsLoaded({ data: trends }))).toEqual({
      ...defaultItemsState,
      request: RequestState.None,
      data: trends,
    });
  });

  it('should be able to mark failed fetching data', () => {
    expect(reducer(defaultItemsState, feedbackTrendsLoadFailed())).toEqual({
      ...defaultItemsState,
      request: RequestState.Failed,
    });
  });
});
