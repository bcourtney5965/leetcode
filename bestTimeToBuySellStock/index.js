function maxProfit(prices) {
  // using Kadane’s Algorithm as inspiration
  if (prices.length < 2) return 0;
  var localMax = 0;
  var absoluteMax = Number.NEGATIVE_INFINITY;
  var absoluteMin = Number.POSITIVE_INFINITY;
  for (var i = 1; i < prices.length; i++) {
    absoluteMin = Math.min(absoluteMin, prices[i - 1]);
    localMax = Math.max(0, prices[i] - absoluteMin);
    absoluteMax = Math.max(absoluteMax, localMax);
  }
  return absoluteMax;
}
console.log('maxProfit([7,1,5,3,6,4])', maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log('maxProfit([7,6,4,3,1])', maxProfit([7, 6, 4, 3, 1])); // 0
