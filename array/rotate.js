// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  let goToSteps = k % nums.length;
  const sliceKPos = nums.splice(nums.length - goToSteps, goToSteps);
  nums.splice(0, 0, ...sliceKPos);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 5;

rotate(arr, k);

console.log(arr);
