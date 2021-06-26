const { RutenAPI } = require('../src/api/ruten_api');

let api = null;

beforeEach(() => {
  api = new RutenAPI();
});

test('getSearchProducts', async () => {
  const result = await api.getSearchProducts(2353693, '假面騎士');
  expect(result).not.toBeNull();
});

test('getProdcutsInfo', async () => {
  const result = await api.getProdcutsInfo([22105869879063]);
  expect(result).not.toBeNull();
});
