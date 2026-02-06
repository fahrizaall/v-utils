import { expect, test } from 'vitest';
import { debounce } from '../../src';

test('debounce calls once', async () => {
  let count = 0;
  const fn = debounce(() => count++, 50);
  fn(); fn(); fn();
  await new Promise(resolve => setTimeout(resolve, 100));
  expect(count).toBe(1);
});