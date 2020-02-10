import getRandomFeedback from './getRandomFeedback';

describe('getRandomFeedback', () => {
  it('should be able to generate passed items count', () => {
    expect(getRandomFeedback(10)).toHaveLength(10);
  });

  it('should be able to generate items with required attributes', () => {
    const items = getRandomFeedback(2);

    items.forEach(item => {
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('email');
      expect(item).toHaveProperty('comment');
      expect(item).toHaveProperty('rating');
    });
  });
});
