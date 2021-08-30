// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let i = 1;
  let n = prices.length;
  let profit = 0;

  while (i < n) {
    if (prices[i] >= prices[i - 1]) {
      // bought => sale
      profit += prices[i] - prices[i - 1];
    }
    i++;
  }

  return profit;
};

const prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
