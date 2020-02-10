import { ajax } from 'rxjs/ajax';
import { of, throwError } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import epic, { feedbackPost, feedbackPosted, feedbackPostFailed } from './feedback';
import { FeedbackItem } from '../models';

jest.mock('rxjs/ajax', () => ({
  ajax: {
    post: jest.fn(),
  },
}));

describe('middlewares/feedback', () => {
  const mockedAjaxPost = ajax.post as jest.Mock;
  const item = {
    name: 'nameA',
    email: 'emailA',
    comment: 'commentA',
    rating: 1,
  } as FeedbackItem;

  it('should be able to post feedback', done => {
    const action$ = ActionsObservable.from([feedbackPost(item)]);
    mockedAjaxPost.mockImplementation(() => of('SUCCESS'));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(feedbackPosted());
      done();
    });
  });

  it('should be able to handle failure', done => {
    const action$ = ActionsObservable.from([feedbackPost(item)]);
    mockedAjaxPost.mockImplementation(() => throwError('ERROR'));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(feedbackPostFailed());
      done();
    });
  });
});
