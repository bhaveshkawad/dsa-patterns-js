/*
✅ Problem Statement:
Given a sorted integer array `nums` and an integer `target`,
return the indices of the two numbers such that they add up to `target`.
Assume exactly one solution exists.

✅ Input:
nums = [2, 7, 11, 15], target = 9

✅ Output:
[0, 1]

✅ Logic Explanation:
This is a Two Pointer problem on a sorted array.
1. Initialize two pointers: `left` at the start and `right` at the end.
2. Compute `sum = nums[left] + nums[right]`.
3. If `sum` equals `target`, return the indices.
4. If `sum` is less than `target`, move `left` forward to increase the sum.
5. If `sum` is greater than `target`, move `right` backward to decrease the sum.
6. Continue until the pointers meet.

✅ Pattern Used:
Two Pointer (Opposite Direction)

✅ Time & Space Complexity:
Time: O(n)  - Single pass using two pointers.
Space: O(1) - No extra space used.
*/

function twoSumSorted (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const sum = nums[left] + nums[right]

    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

// Example usage:
console.log(twoSumSorted([2, 7, 11, 15], 9)) // [0, 1]
