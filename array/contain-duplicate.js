// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

var containsDuplicate = function (nums) {
  const uniqueSet = new Set(nums);
  return nums.length > uniqueSet.size;
};

const array = [1, 2, 3, 4, 1];

console.log(containsDuplicate(array));
