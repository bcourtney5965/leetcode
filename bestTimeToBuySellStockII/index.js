function maxProfit2(prices) {
  // using Kadane’s Algorithm as inspiration
  var max = 0;
  for (var i = 1; i < prices.length; i++) {
    max += Math.max(0, prices[i] - prices[i - 1]);
  }
  return max;
}
console.log('maxProfit2([7,1,5,3,6,4])', maxProfit2([7, 1, 5, 3, 6, 4])); // 7
console.log('maxProfit2([1,2,3,4,5])', maxProfit2([1, 2, 3, 4, 5])); // 4
console.log('maxProfit2([7,6,4,3,1])', maxProfit2([7, 6, 4, 3, 1])); // 0
console.log('maxProfit2([7])', maxProfit2([7])); // 0
