const AirtableAPI = require('./airtable_api');

class ChatAPI extends AirtableAPI {
  constructor () {
    super();
    this.table = this.base('Chats');
  }

  async getChats (chatId, botType) {
    const filterByFormula = [];
    if (chatId) {
      filterByFormula.push(`{chat_id}="${chatId}"`);
    }

    if (botType) {
      filterByFormula.push(`{bot_type}="${botType}"`);
    }

    let query = '';

    if (filterByFormula.length > 1) {
      query = `AND(${filterByFormula.join(',')})`;
    } else {
      query = filterByFormula[0];
    }

    return await this.read({ filterByFormula: query });
  }

  async addChat (chatId, botType, radars) {
    const response = await this.add([{
      fields: {
        chat_id: chatId.toString(),
        bot_type: botType,
        Radar: radars
      }
    }]);
    return response.data;
  }

  async removeChat (chatId) {
    const deleted = await this.delete([chatId]);
    return deleted;
  }
}

module.exports = ChatAPI;
