// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
  return nums.length;
};

const arr = [1, 2, 2, 2, 3, 4, 4, 5];

const removedArr = removeDuplicates(arr);
console.log(removedArr);
