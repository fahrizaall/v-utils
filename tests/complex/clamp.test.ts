import { expect, test } from "vitest";
import { clamp } from "../../src";

test('clamp within range', () => {
  expect(clamp(5, 1, 10)).toBe(5);
});

test('clamp outside range', () => {
  expect(clamp(20, 1, 10)).toBe(10);
});