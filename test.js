const assert = require('assert');
const add = require('./index.js');

describe('add function', function() {
    it('should return 0 when input is an empty string', function() {
        assert.strictEqual(add(""), 0);
    });

    it('should return the number itself when input is a single number string', function() {
        assert.strictEqual(add("1"), 1);
    });

    it('should return the sum of numbers when input is comma-separated numbers string', function() {
        assert.strictEqual(add("1,5"), 6);
    });

    it('should return the sum of numbers when input contains multipe numbers separated by commas', function() {
        assert.strictEqual(add("1,2,3,4,5"), 15);
    });

    it('should return the sum of numbers when input contains multipe numbers with two digits separated by commas', function() {
        assert.strictEqual(add("10,20,30,40,50"), 150);
    });

    it('should return the sum of numbers when input contains multipe numbers with three digits separated by commas', function() {
        assert.strictEqual(add("100,200,3000,400,555"), 4255);
    });
});
