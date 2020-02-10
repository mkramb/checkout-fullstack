import { FeedbackItem } from './types';
import decode from './decode';

describe('decode', () => {
  const validItems = {
    name: 'name',
    email: 'email',
    comment: 'comment',
    rating: 5,
  };

  it('should be able to decode valid item', () => {
    expect(decode(FeedbackItem, validItems)).toBe(validItems);
  });

  it('should throw error when decoding invalid item', () => {
    expect(() => decode(FeedbackItem, { ...validItems, name: '' })).toThrow();
    expect(() => decode(FeedbackItem, { ...validItems, rating: '-' })).toThrow();
  });
});
