const palindrome = require('../functions/palindrome.js/index.js');
const assert = require('assert');

describe('Palindrome test', function () {
    it('apple is not a palindrome', function () {
        assert.equal(palindrome('apple'), false) 
    });
    it('kayak is a palindrome', function () {
        assert.equal(palindrome('kayak'), true)
    });
    it('orange is not a palindrome', function () {
        assert.equal(palindrome('orange'), false)
    });
    it('Racecar is a palindrome', function () {
        assert.equal(palindrome('Racecar'), true)
    });
});