const context = require('../context');

module.exports.getPerpParam = function () {
   return context.api
      .get('/perp/params')
};

module.exports.getPerpTraderPosition = function () {
   return context.api
      .get('/perp/trader_position?trader=nibi1gc6vpl9j0ty8tkt53787zps9ezc70kj88hluw4&token_pair=ubtc:unused')
};

module.exports.getPerpFundingRates = function () {
   return context.api
      .get('/perp/funding_rates')
};

module.exports.getPricefeedParams = function () {
   return context.api
      .get('/pricefeed/v1beta1/params')
};

module.exports.getPricefeedPricesUnusd = function () {
   return context.api
      .get('/pricefeed/v1beta1/prices/ubtc:unusd')
};

module.exports.getPricefeedPrices = function () {
   return context.api
      .get('/pricefeed/v1beta1/prices')
};

module.exports.getPricefeedRawpricesUnusd = function () {
   return context.api
      .get('/pricefeed/v1beta1/rawprices/ubtc:unusd')
};

