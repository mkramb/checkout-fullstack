import reducer, { defaultItemsState } from './feedbackList';
import { feedbackListLoad, feedbackListLoaded, feedbackListLoadFailed } from '../middlewares/feedbackList';
import { FeedbackItem, RequestState } from '../models';

describe('state/feedbackList', () => {
  const items = [
    { name: 'nameA', email: 'emailA', comment: 'commentA', rating: 1 },
    { name: 'nameB', email: 'emailB', comment: 'commentB', rating: 1 },
    { name: 'nameC', email: 'emailC', comment: 'commentC', rating: 2 },
  ] as FeedbackItem[];

  it('should be able to start fetching data', () => {
    expect(reducer(defaultItemsState, feedbackListLoad())).toEqual({
      ...defaultItemsState,
      request: RequestState.Fetching,
    });
  });

  it('should be able to stop fetching data', () => {
    expect(
      reducer(
        defaultItemsState,
        feedbackListLoaded({
          data: items,
        })
      )
    ).toEqual({
      ...defaultItemsState,
      request: RequestState.None,
      data: items,
    });
  });

  it('should be able to mark failed fetching data', () => {
    expect(reducer(defaultItemsState, feedbackListLoadFailed())).toEqual({
      ...defaultItemsState,
      request: RequestState.Failed,
    });
  });
});
