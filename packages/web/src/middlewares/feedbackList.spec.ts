import { ajax } from 'rxjs/ajax';
import { of, throwError } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import epic, { feedbackListLoad, feedbackListLoaded, feedbackListLoadFailed } from './feedbackList';
import { feedbackPosted } from './feedback';
import { FeedbackItem } from '../models';

jest.mock('rxjs/ajax', () => ({
  ajax: {
    getJSON: jest.fn(),
  },
}));

describe('middlewares/feedbackList', () => {
  const mockedAjaxLetJSON = ajax.getJSON as jest.Mock;
  const items = [
    { name: 'nameA', email: 'emailA', comment: 'commentA', rating: 1 },
    { name: 'nameB', email: 'emailB', comment: 'commentB', rating: 1 },
    { name: 'nameC', email: 'emailC', comment: 'commentC', rating: 2 },
  ] as FeedbackItem[];

  it('should be able to fetch feedback', done => {
    const action$ = ActionsObservable.from([feedbackListLoad()]);
    mockedAjaxLetJSON.mockImplementation(() => of(items));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(
        feedbackListLoaded({
          data: items,
        })
      );
      done();
    });
  });

  it('should be able to fetch feedback when new feedback is posted', done => {
    const action$ = ActionsObservable.from([feedbackPosted()]);
    mockedAjaxLetJSON.mockImplementation(() => of(items));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(
        feedbackListLoaded({
          data: items,
        })
      );
      done();
    });
  });

  it('should be able to handle failure', done => {
    const action$ = ActionsObservable.from([feedbackListLoad()]);
    mockedAjaxLetJSON.mockImplementation(() => throwError('ERROR'));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(feedbackListLoadFailed());
      done();
    });
  });
});
