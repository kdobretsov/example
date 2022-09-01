
const checkStatusCodeTemplate = function (response, validateCode) {
  response.status.should.equal(validateCode, 'Got a status code of ' + response.status
    + ' when expecting a status code of ' + validateCode + ' ' + response.request.url);
};

module.exports.checkStatusCode = checkStatusCodeTemplate;

module.exports.checkStatusCode200 = function (response) {
  checkStatusCodeTemplate(response, 200)
};

module.exports.checkStatusCode400 = function (response) {
  checkStatusCodeTemplate(response, 400)
};

module.exports.checkStatusCode501 = function (response) {
  checkStatusCodeTemplate(response, 501)
};

module.exports.verifyPerpParam = function (response) {
  this.checkStatusCode200(response);
  response.body.should.matchPattern(`{
    "params": {
      "stopped": Boolean,
      "liquidation_fee_ratio": String,
      "ecosystem_fund_fee_ratio": String,
      "fee_pool_fee_ratio": String,
      "partial_liquidation_ratio": String,
      "funding_rate_interval": String,
      "twap_lookback_window": String
    }
}`);
};

module.exports.verifyPerpTraderPosition = function (response) {
  this.checkStatusCode400(response);
  response.body.should.matchPattern(`{
      "code": Number,
      "details": Array,
      "message": "no position found: invalid request"
      }`);
};

module.exports.verifyPerpFundingRates = function (response) {
  this.checkStatusCode501(response);
  response.body.should.matchPattern(`{
      "code": Number,
      "details": Array,
      "message": "Not Implemented"
      }`);
};

module.exports.verifyPricefeedParams = function (response) {
  this.checkStatusCode200(response);
  response.body.should.matchPattern(`{
    "params": {
      "pairs": [
        {
          "token0": String,
          "token1": String
        },
        {
          "token0": String,
          "token1": String
        },
        {
          "token0": String,
          "token1": String
        },
        {
          "token0": String,
          "token1": String
        }
      ],
      "twap_lookback_window": String
    }  
  }`);
};

module.exports.verifyPricefeedPricesUnusd = function (response) {
  this.checkStatusCode200(response);
  response.body.should.matchPattern(`{
      "price": {
            "pair_id": String,
            "price": String,
            "twap": String
          }
      }`);
};

module.exports.verifyPricefeedPrices = function (response) {
  this.checkStatusCode200(response);
  response.body.should.matchPattern(`{
      "prices": [
          {
            "pair_id": String,
            "price": String,
            "twap": String
          }
        ]
      }`);
};

module.exports.verifyPricefeedRawpricesUnusd = function (response) {
  this.checkStatusCode200(response);
  response.body.should.matchPattern(`{
      "raw_prices": [
          {
            "expiry": String,
            "oracle_address": String,
            "pair_id": String,
            "price": String
          },
          {
            "expiry": String,
            "oracle_address": String,
            "pair_id": String,
            "price": String
          }
        ]
      }`);
};
