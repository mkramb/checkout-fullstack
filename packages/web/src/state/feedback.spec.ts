import reducer, { defaultItemsState } from './feedback';
import { feedbackPost, feedbackPosted, feedbackPostFailed } from '../middlewares/feedback';
import { FeedbackItem, RequestState } from '../models';

describe('state/feedback', () => {
  const item = {
    name: 'nameA',
    email: 'emailA',
    comment: 'commentA',
    rating: 1,
  } as FeedbackItem;

  it('should be able to start fetching data', () => {
    expect(reducer(defaultItemsState, feedbackPost(item))).toEqual({
      ...defaultItemsState,
      request: RequestState.Fetching,
    });
  });

  it('should be able to stop fetching data', () => {
    expect(reducer(defaultItemsState, feedbackPosted())).toEqual({
      ...defaultItemsState,
      request: RequestState.None,
    });
  });

  it('should be able to mark failed fetching data', () => {
    expect(reducer(defaultItemsState, feedbackPostFailed())).toEqual({
      ...defaultItemsState,
      request: RequestState.Failed,
    });
  });
});
