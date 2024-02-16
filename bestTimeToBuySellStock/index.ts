function maxProfit(prices: number[]): number {
  let max: number = 0;

  if (prices.length < 2) return max;

  // for each item
  for (let i = 0; i < prices.length; i++) {
    let innerMax: number = 0;
    // loop over items appearing after the 1st item
    for (let j = i + 1; j < prices.length; j++) {
      innerMax = Math.max(innerMax, prices[j] - prices[i]);
    }
    max = Math.max(max, innerMax);
  }
  return max;
}

console.log('maxProfit([7,1,5,3,6,4])', maxProfit([7, 1, 5, 3, 6, 4]));