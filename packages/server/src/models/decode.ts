import * as t from 'io-ts';
import { isLeft } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/lib/PathReporter';

export default function decode(type: t.Any, data: unknown): t.TypeOf<typeof type> {
  const value = type.decode(data);

  if (isLeft(value)) {
    throw PathReporter.report(value);
  }

  return value.right;
}
