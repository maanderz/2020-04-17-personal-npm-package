const capitalize = require('../functions/capitalize.js');
const assert = require('assert');

describe('Capitalizes every word', function () {
  it('capitalizes the first letter', function () {
    assert.equal(capitalize('i love food especially fruits and cake'), 'I Love Food Especially Fruits And Cake')
  });
  it('capitalizes the first letter of every word in a sentence', function () {
    assert.equal(capitalize('hello world'), 'Hello World')
  });
});