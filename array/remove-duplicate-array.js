// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 1;
  let n = nums.length;
  let newArr = [nums[0]];

  while (i < n) {
    if (newArr[newArr.length - 1] !== nums[i]) {
      newArr.push(nums[i]);
    }

    i++;
  }
  return newArr;
};

const arr = [1, 2, 2, 2, 3, 4, 4, 5];

const removedArr = removeDuplicates(arr);
console.log(removedArr);
