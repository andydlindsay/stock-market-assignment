var assert = require("chai").assert;
var maxProfit = require("../max-profit");

describe("Stock-Market", () => {

  it('should return 16 when passed [45, 24, 35, 31, 40, 38, 11]', () => {
    var list = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(list);
    assert.equal(result, 16);
  });

  it('should return -1 when passed [50, 45, 40, 29, 17]', () => {
    var list = [50, 45, 40, 29, 17];
    var result = maxProfit(list);
    assert.equal(result, -1);
  });

});
