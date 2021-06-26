const AirtableAPI = require('./airtable_api');

class ProductsAPI extends AirtableAPI {
  constructor () {
    super();
    this.table = this.base('Products');
  }

  async getProducts (filter = null) {
    return await this.read(filter);
  }

  async createProduct (item) {
    return await this.add([item]);
  }

  async updateProduct (item) {
    return await this.update([item]);
  }
}

module.exports = ProductsAPI;
