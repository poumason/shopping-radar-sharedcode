
require('dotenv').config();

const ChartAPI = require('../src/db/chat_api');

describe('Test ChartAPI', () => {
  const api = new ChartAPI();

  // test('addChats', async () => {
  //   const result = await api.getChats('224300083');
  //   expect(result.length).toBeGreaterThanOrEqual(1);
  // });

  test('getChats', async () => {
    const result = await api.getChats('224300083');
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  // test('removeChat', async () => {
  //   const result = await api.removeChat('recQGBaaSymClCrzT');
  //   expect(result).toHaveLength(1);
  // });
});
