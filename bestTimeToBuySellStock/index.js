function maxProfit(prices) {
  var max = 0;
  if (prices.length < 2) return max;
  // for each item
  for (var i = 0; i < prices.length; i++) {
    var innerMax = 0;
    // loop over items appearing after the 1st item
    for (var j = i + 1; j < prices.length; j++) {
      innerMax = Math.max(innerMax, prices[j] - prices[i]);
    }
    max = Math.max(max, innerMax);
  }
  return max;
}
console.log('maxProfit([7,1,5,3,6,4])', maxProfit([7, 1, 5, 3, 6, 4]));
