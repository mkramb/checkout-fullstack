import { ajax } from 'rxjs/ajax';
import { of, throwError } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import epic, { feedbackTrendsLoad, feedbackTrendsLoaded, feedbackTrendsLoadFailed } from './feedbackTrends';
import { FeedbackTrends } from '../models';

jest.mock('rxjs/ajax', () => ({
  ajax: {
    getJSON: jest.fn(),
  },
}));

describe('middlewares/feedbackTrends', () => {
  const mockedAjaxLetJSON = ajax.getJSON as jest.Mock;
  const trends = {
    1: 2,
    2: 1,
  } as FeedbackTrends;

  it('should be able to fetch feedback trends', done => {
    const action$ = ActionsObservable.from([feedbackTrendsLoad()]);
    mockedAjaxLetJSON.mockImplementation(() => of(trends));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(
        feedbackTrendsLoaded({
          data: trends,
        })
      );
      done();
    });
  });

  it('should be able to handle failure', done => {
    const action$ = ActionsObservable.from([feedbackTrendsLoad()]);
    mockedAjaxLetJSON.mockImplementation(() => throwError('ERROR'));

    const epic$ = epic(action$);

    epic$.subscribe(action => {
      expect(action).toEqual(feedbackTrendsLoadFailed());
      done();
    });
  });
});
