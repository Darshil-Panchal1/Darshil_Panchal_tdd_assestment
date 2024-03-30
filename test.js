const assert = require('assert');
const add = require('./index.js');

describe('add function', function() {
    it('should return 0 when input is an empty string', function() {
        assert.strictEqual(add(""), 0);
    });

    it('should return the number itself when input is a single number string', function() {
        assert.strictEqual(add("1"), 1);
    });

    it('should handle newline as delimiter and return the sum of numbers', function() {
        assert.strictEqual(add("1\n5"), 6);
    });

    it('should handle newline and comma as delimiters and return the sum of numbers', function() {
        assert.strictEqual(add("1\n2,3"), 6);
    });

    it('should handle newline and comma as delimiters, ignoring empty values, and return the sum of numbers', function() {
        assert.strictEqual(add("1,2\n3,4\n5"), 15);
    });

    it('should handle newline and comma as delimiters, and return NaN if input contains invalid format ("1,\n")', function() {
        assert.strictEqual(isNaN(add("1,\n")), true);
    });

    it('should handle whitespace around numbers and ignore them', function() {
        assert.strictEqual(isNaN(add("1, \n")), true);
    });
});