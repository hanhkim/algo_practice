// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  let n = nums.length;
  if (k === n || n === 1 || k === 0) return;

  k %= n;
  let newNums = [...nums];
  for (let i = 0; i < n; i++) {
    if (i < k) newNums[i] = nums[n - k + i];
    else newNums[i] = nums[i - k];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = newNums[i];
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 5;

rotate(arr, k);

console.log(arr);
