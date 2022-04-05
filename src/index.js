module.exports = {
  ...require('./utility'),
  // api
  ...require('./api/ruten_api'),
  // bot
  ...require('./bot/telegram_api'),
  ...require('./bot/line_api'),
  // db
  ...require('./db/index')
};
