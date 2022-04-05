require('dotenv').config();
const line = require('@line/bot-sdk');

class LINEAPI {
  constructor () {
    this.client = new line.Client({
      channelAccessToken: process.env.LINE_BOT_CHANNEL_TOKEN
    });
  }

  async push (roomIDs, messageObj) {
    if (roomIDs && roomIDs.length > 0) {
      roomIDs.forEach(async (roomID) => {
        console.log(roomID);
        await this.client.pushMessage(roomID, messageObj);
      });
    }
  }

  // static async notify (chatId, message) {
  //   console.log(process.env.LINE_BOT_CHANNEL_TOKEN);
  //   const instance = axios.create({
  //     headers: {
  //       Authorization: `Bearer ${process.env.LINE_BOT_CHANNEL_TOKEN}`,
  //       'Content-Type': 'application/json'
  //     }
  //   });

  //   try {
  //     const response = await instance.post('https://api.line.me/v2/bot/message/push', message);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }
}

module.exports = { LINEAPI };
