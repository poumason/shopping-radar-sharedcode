require('dotenv').config();
const axios = require('axios');
const { isAvailablePrice } = require('../utility');

class RutenAPI {
  async getSearchProducts (sellerId, keyword) {
    /**
     * query strings
     * sort: new/dc, rnk/dc
     * q: query string
     * limit: item count of page
     * offset: offset of page
     */
    const response = await axios.get(`${process.env.RUTEN_API_HOST}/search/v3/index.php/core/seller/${sellerId}/prod`, {
      params: {
        sort: 'new/dc',
        q: keyword
      }
    });

    return response.data;
  }

  async getProductsInfo (productIds) {
    const ids = productIds.join(',');

    const response = await axios.get(`${process.env.RUTEN_API_HOST}/prod/v2/index.php/prod`, {
      params: {
        id: ids
      }
    });

    return response.data;
  }

  async getItemsOnIDs (productIds) {
    const ids = productIds.join(',');

    const response = await axios.get(`${process.env.RUTEN_API_HOST}/items/v2/list`, {
      params: {
        gno: ids,
        level: 'simple'
      }
    });

    return response.data;
  }

  async validateProduct (productId, ignoreTags) {
    const result = await this.getProductsInfo([productId]);

    if (!result || result.length === 0) {
      console.log(`Can not get information of product: ${productId}`);
      return false;
    }

    const product = result[0];
    // info fields: ProdId, ProdName, PriceRange, StockQty, SoldQty
    console.log(product);
    const validatedPrice = isAvailablePrice(Math.max(...product.PriceRange), ignoreTags);

    // check price is validated
    if (!validatedPrice) {
      console.log(`${product.ProdName} is not enabled.`);
      return false;
    }

    // check count is full
    console.log(`${product.ProdName} is full count? ${product.StockQty > product.SoldQty}`);
    return product.StockQty > product.SoldQty;
  }
}

module.exports = { RutenAPI };
