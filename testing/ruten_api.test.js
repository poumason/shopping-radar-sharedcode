const { RutenAPI } = require('../src/api/ruten_api');

let api = null;

beforeEach(() => {
  api = new RutenAPI();
});

test('getSearchProducts', async () => {
  const ids = [
    2353693, 1781003, 1628541, 2425045, 18077192, 13223531, 2779276, 6109326,
    4807293
  ];

  for (const id of ids) {
    console.log(id);
    const result = await api.getSearchProducts(id, '假面騎士');
    console.log(result);
    expect(result).not.toBeNull();
  }
});

test('getProductsInfo', async () => {
  const result = await api.getProductsInfo([22212271356812]);
  console.log(result);
  expect(result).not.toBeNull();
});
