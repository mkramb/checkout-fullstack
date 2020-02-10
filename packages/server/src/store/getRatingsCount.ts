import { FeedbackItem } from '../models/types';

export default function getRatingsCount(items: FeedbackItem[]) {
  return items.reduce((values, item) => {
    const rating = +item.rating;

    return {
      ...values,
      [+item.rating]: (values[rating] || 0) + 1,
    };
  }, {});
}
