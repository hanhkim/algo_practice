// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let i = 0;
  let n = prices.length;
  let buyDate = -1;
  let profit = 0;

  while (i < n - 1) {
    // observe to sale
    if (prices[i] >= prices[i + 1]) {
      if (buyDate > -1) {
        // bought => sale
        profit += prices[i] - prices[buyDate];
        buyDate = -1; // not have stock now
      }
      i++;
    } else {
      // observe to buy
      if (buyDate === -1) {
        buyDate = i;
      }
      i++;
    }
  }

  // sale day is last in range
  if (buyDate > -1) {
    profit += prices[n - 1] - prices[buyDate];
    buyDate = -1;
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
