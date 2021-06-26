const AirtableAPI = require('./airtable_api');

class RadarTableAPI extends AirtableAPI {
  constructor () {
    super();
    this.table = this.base('Radar');
  }

  async getRadars () {
    return await this.read();
  }

  async createRadar (item) {
    return await this.add([item]);
  }
}

module.exports = RadarTableAPI;
