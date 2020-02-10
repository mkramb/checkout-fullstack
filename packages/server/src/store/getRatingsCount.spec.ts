import getRatingsCount from './getRatingsCount';
import { FeedbackItem } from '../models/types';

describe('getRatingsCount', () => {
  it('should handle empty items', () => {
    expect(getRatingsCount([])).toEqual({});
  });

  it('should be able to count by rating', () => {
    const items = [
      { name: 'nameA', email: 'emailA', comment: 'commentA', rating: 1 },
      { name: 'nameB', email: 'emailB', comment: 'commentB', rating: 1 },
      { name: 'nameC', email: 'emailC', comment: 'commentC', rating: 2 },
    ] as FeedbackItem[];

    expect(getRatingsCount(items)).toEqual({
      1: 2,
      2: 1,
    });
  });
});
