import faker from 'faker';

export default function getRandomFeedback(count: number) {
  return Array.from(Array(count).keys()).map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    comment: faker.lorem.sentence(),
    rating: faker.random.number({
      min: 1,
      max: 5,
    }),
  }));
}
