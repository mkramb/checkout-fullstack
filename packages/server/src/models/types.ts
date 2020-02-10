import * as t from 'io-ts';
import { NonEmptyString } from 'io-ts-types/lib/NonEmptyString';

export const FeedbackItem = t.type({
  name: NonEmptyString,
  email: NonEmptyString,
  comment: NonEmptyString,
  rating: t.number,
});

export type FeedbackItem = Readonly<t.TypeOf<typeof FeedbackItem>>;
