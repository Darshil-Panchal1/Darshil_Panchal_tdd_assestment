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

    it('should return the correct sum when input contains multiple numbers separated by commas', function() {
        assert.strictEqual(add("1,2,3,4,5"), 15);
    });

    it('should return the correct sum when input contains multiple numbers with two digits separated by commas', function() {
        assert.strictEqual(add("10,20,30,40,50"), 150);
    });

    it('should throw an error for negative numbers in input', function() {
        assert.throws(() => {
            add("1,-2,3,-4,5");
        }, Error);
    });

    it('should include negative numbers in error message', function() {
        try {
            add("1,-2,3,-4,5");
        } catch (error) {
            assert.strictEqual(error.message, "Negative numbers not allowed: -2,-4");
        }
    });
});