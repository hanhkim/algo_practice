// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single;
  nums.forEach((num) => {
    const indexsNum = nums.filter((n) => n === num);
    if (indexsNum.length === 1) single = indexsNum[0];
  });
  return single;
};

const nums = [2, 2, 1];
console.log(singleNumber(nums));
