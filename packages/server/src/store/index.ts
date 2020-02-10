import { FeedbackItem } from '../models/types';
import getRandomFeedback from './getRandomFeedback';

let store: FeedbackItem[] = [];

export const appendItem = (item: FeedbackItem) => {
  store.unshift(item);
};

export const getItems = () => {
  return store;
};

export const clearItems = () => {
  store = [];
};

// populate store with random data
if (process.env.TEST_ITEMS) {
  getRandomFeedback(+process.env.TEST_ITEMS || 10).map(appendItem);
}
