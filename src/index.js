module.exports = {
  ...require('./utility'),
  // api
  ...require('./api/ruten_api'),
  // bot
  ...require('./bot/telegram_api'),
  // db
  ...require('./db/index')
};
