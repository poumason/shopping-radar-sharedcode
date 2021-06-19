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

    let query = '';

    if (filterByFormula.length > 1) {
      query = `AND(${filterByFormula.join(',')})`;
    } else {
      query = filterByFormula[0];
    }

    const response = await this.instance.get('/Chats', {
      params: {
        filterByFormula: query
      }
    });

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
