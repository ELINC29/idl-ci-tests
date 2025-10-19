const sum = require('./sum');

test('addition de base', () => {
  expect(sum(2, 3)).toBe(5);
});
