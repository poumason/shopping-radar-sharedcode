const { isEmptyOrNull, isAvailablePrice } = require('../src/utility');

test('isEmptyOrNull', () => {
  const target = '';
  expect(isEmptyOrNull(target)).toBe(true);
});

test('isAvailablePrice', () => {
  const target = 7309999;
  expect(isAvailablePrice(target)).toBe(false);
});
