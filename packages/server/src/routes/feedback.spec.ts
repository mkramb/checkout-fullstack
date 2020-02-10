import { RouterContext } from 'koa-router';
import { feedbackRouteList, feedbackRouteAppend } from './feedback';
import getRatingsCount from '../store/getRatingsCount';
import { getItems, appendItem } from '../store';
import { FeedbackItem } from '../models';

jest.mock('../store', () => ({
  getItems: jest.fn(),
  appendItem: jest.fn(),
}));

jest.mock('../store/getRatingsCount', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('feedback', () => {
  const mockedGetItems = getItems as jest.Mock;
  const mockedAppendItem = appendItem as jest.Mock;
  const mockedGetRatingsCount = getRatingsCount as jest.Mock;

  const items = [
    { name: 'nameA', email: 'emailA', comment: 'commentA', rating: 1 },
    { name: 'nameB', email: 'emailB', comment: 'commentB', rating: 1 },
    { name: 'nameC', email: 'emailC', comment: 'commentC', rating: 2 },
  ] as FeedbackItem[];

  describe('feedbackRouteAppend', () => {
    it('should be able append items', async () => {
      const ctx = {
        request: {
          body: { ...items[0] },
        },
      } as RouterContext;

      await feedbackRouteAppend(ctx);

      expect(ctx.status).toEqual(200);
      expect(ctx.body).toBeUndefined();
    });

    it('should be able to handle errors', async () => {
      const ctx = {
        request: {
          body: { ...items[0] },
        },
      } as RouterContext;

      mockedAppendItem.mockImplementation(() => {
        throw new Error();
      });

      await feedbackRouteAppend(ctx);

      expect(ctx.status).toEqual(400);
      expect(ctx.body).toHaveProperty('errors');
    });
  });

  describe('feedbackRouteList', () => {
    it('should be able to return items', async () => {
      const ctx = {} as RouterContext;
      mockedGetItems.mockReturnValueOnce(items);

      await feedbackRouteList(ctx);

      expect(ctx.status).toEqual(200);
      expect(ctx.body).toEqual(items);
    });
  });

  describe('feedbackRouteTreds', () => {
    it('should be able to return items', async () => {
      const ctx = {} as RouterContext;

      mockedGetItems.mockReturnValueOnce(items);
      mockedGetRatingsCount.mockReturnValueOnce(items);

      await feedbackRouteList(ctx);

      expect(ctx.status).toEqual(200);
      expect(ctx.body).toEqual(items);
    });
  });
});
