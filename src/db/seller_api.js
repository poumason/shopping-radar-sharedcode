const AirtableAPI = require('./airtable_api');

class SellerAPI extends AirtableAPI {
  constructor () {
    super();
    this.table = this.base('Seller');
  }

  async getSellers () {
    return await this.read();
  }
}

module.exports = SellerAPI;
