const Airtable = require('airtable');

class AirtableAPI {
  constructor () {
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.AIRTABLE_API_KEY
    });
    this.base = Airtable.base(process.env.AIRTABLE_TABLE_NAME);
  }

  add (items) {
    return new Promise((resolve, reject) => {
      this.table.create(items, (err, records) => {
        if (err) return reject(err);
        resolve(records);
      });
    });
  }

  delete (ids) {
    return new Promise((resolve, reject) => {
      this.table.destroy(ids, (err, deletedRecords) => {
        if (err) return reject(err);
        resolve(deletedRecords);
      });
    });
  }

  /**
   * Read data, with params.
   */
  read (params) {
    return new Promise((resolve, reject) => {
      let data = [];
      this.table.select(params || {}).eachPage((records, next) => {
        data = data.concat(records.map(el => el));
        next();
      }, err => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  update (items) {
    return new Promise((resolve, reject) => {
      this.table.update(items, (err, records) => {
        if (err) return reject(err);
        resolve(records);
      });
    });
  }
}

module.exports = AirtableAPI;
