const context = require('../../../support/context');
const genericRequest = require('../../../support/requests/generic-request');
const genericValidators = require('../../../support/validators/generic-validators');


it('Perp Param', async function () {
  const response = await genericRequest.getPerpParam();
  genericValidators.verifyPerpParam(response)
});

it('Prep Trader Position', async function () {
  const response = await genericRequest.getPerpTraderPosition();
  genericValidators.verifyPerpTraderPosition(response)
});

it('Prep Funding Rates', async function () {
  const response = await genericRequest.getPerpFundingRates();
  genericValidators.verifyPerpFundingRates(response)
});


it('Pricefeed Params', async function () {
  const response = await genericRequest.getPricefeedParams();
  genericValidators.verifyPricefeedParams(response)
});

it('Pricefeed Prices Unusd', async function () {
  const response = await genericRequest.getPricefeedPricesUnusd();
  genericValidators.verifyPricefeedPricesUnusd(response)
});

it('Pricefeed Prices', async function () {
  const response = await genericRequest.getPricefeedPrices();
  genericValidators.verifyPricefeedPrices(response)
});

it('Pricefeed Rawprices Unusd', async function () {
  const response = await genericRequest.getPricefeedRawpricesUnusd();
  genericValidators.verifyPricefeedRawpricesUnusd(response)
});