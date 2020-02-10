import { getItems, clearItems, appendItem } from './index';
import getRandomFeedback from './getRandomFeedback';

describe('index', () => {
  beforeEach(() => {
    clearItems();
  });

  it('should start empty', () => {
    expect(getItems()).toEqual([]);
  });

  it('should be able to appendItem', () => {
    getRandomFeedback(10).forEach(appendItem);
    expect(getItems()).toHaveLength(10);
  });

  it('should be able to clearItems', () => {
    getRandomFeedback(10).forEach(appendItem);
    clearItems();

    expect(getItems()).toHaveLength(0);
  });
});
