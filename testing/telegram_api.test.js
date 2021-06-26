const { TelegramAPI } = require('../src/bot/telegram_api');

test('notify', async () => {
  const result = await TelegramAPI.notify('', '');
  expect(result).toBeNull();
});
