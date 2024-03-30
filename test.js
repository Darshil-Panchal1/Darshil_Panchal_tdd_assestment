const assert = require('assert');
const add = require('./index.js');

describe('add function', function() {
    it('should return 0 when input is an empty string', function() {
        assert.strictEqual(add(""), 0);
    });

    it('should return the number itself when input is a single number string', function() {
        assert.strictEqual(add("1"), 1);
    });

    it('should handle custom delimiter ";" and return the sum of numbers', function() {
        assert.strictEqual(add("//;\n1;2"), 3);
    });

    it('should handle custom delimiter "|" and return the sum of numbers', function() {
        assert.strictEqual(add("//|\n1|2|3"), 6);
    });

    it('should handle custom delimiter "+" and return the sum of numbers', function() {
        assert.strictEqual(add("//+\n1+2+3+4+5"), 15);
    });

    it('should handle custom delimiter "@" and return the sum of numbers', function() {
        assert.strictEqual(add("//@\n10@20@30@40@50"), 150);
    });

    it('should handle custom delimiter and ignore empty values', function() {
        assert.strictEqual(add("//;\n1;;2"), 3);
    });

    it('should handle custom delimiter and whitespace around numbers', function() {
        assert.strictEqual(add("//;\n1; 2 ;3"), 6);
    });
});