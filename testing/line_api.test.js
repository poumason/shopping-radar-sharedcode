const LINEAPI = require('../src/bot/line_api');

test('notify', async () => {
  const message = {
    type: 'text',
    text: 'Hello, world2'
  };

  const roomIDs = [''];

  const api = new LINEAPI();

  try {
    await api.push(roomIDs, message);
  } catch (e) {
    console.log(e);
  }
});
