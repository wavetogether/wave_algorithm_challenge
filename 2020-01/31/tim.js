// Runtime: 60 ms, faster than 67.76% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 35.3 MB, less than 90.48% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0;
  
  for (let i=0; i < prices.length-1; i++) {
    if (prices[i] < prices[i+1]) {
      ret += prices[i+1] - prices[i];
    }
  }
  
  return ret;
};
