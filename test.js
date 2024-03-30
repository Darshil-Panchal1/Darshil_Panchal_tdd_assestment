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
});
