import sum from '../sum';

test('should first', () => {
  const result = sum(3, 6);
  expect(result).toBe(9);
});
