require('colors');
const supertest = require('supertest');
const context = require('../support/context');
const chai = require('chai');
const should = chai.should();
const chaiJsonPattern = require('chai-json-pattern').default;
chai.use(chaiJsonPattern);

before(function () {
    console.log('     Using TESTNET environment     '.black.bgGreen);
    context.hostname = 'https://lcd.testnet-3.nibiru.fi/nibiru';
    context.api = supertest(context.hostname);
  });
  