const AirtableAPI = require('./airtable_api');

class ChatAPI extends AirtableAPI {
  async getChats (chatId, botType) {
    const filterByFormula = [];
    if (chatId) {
      filterByFormula.push(`{chat_id}="${chatId}"`);
    }

    if (botType) {
      filterByFormula.push(`{bot_type}="${botType}"`);
    }

    let query = null;

    if (filterByFormula.length > 0) {
      query = {
        params: filterByFormula.join('&')
      };
    }

    const response = await this.instance.get('/Chats', query);
    return response.data;
  }

  async addChat (chatId, botType, radars) {
    const response = await this.instance.post('/Chats', {
      records: [
        {
          fields: {
            chat_id: chatId,
            bot_type: botType,
            Radar: radars
          }
        }
      ]
    });
    return response.data;
  }

  async removeChat (chatId) {
    const response = await this.instance.delete(`/Chats/${chatId}`);
    return response.data;
  }
}

module.exports = ChatAPI;
