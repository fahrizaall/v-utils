import { expect, test } from 'vitest';
import { memoize } from '../../src';

test('memoize caches result', () => {
  let calls = 0;
  const fn = memoize((n: number) => {
    calls++;
    return n * 2;
  });
  fn(2);
  fn(2);
  expect(calls).toBe(1);
});