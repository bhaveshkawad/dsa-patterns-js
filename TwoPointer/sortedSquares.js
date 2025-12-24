/*
✅ Problem Statement:
Given a sorted integer array `nums` (sorted in non-decreasing order),
return an array of the squares of each number sorted in non-decreasing order.

✅ Input:
nums = [-4, -1, 0, 3, 10]

✅ Output:
[0, 1, 9, 16, 100]

✅ Logic Explanation:
This is a Two Pointer problem on a sorted array.
1. Initialize two pointers:
   - `left` at the start of the array
   - `right` at the end of the array
2. Create a result array of the same size.
3. Compare the absolute values of `nums[left]` and `nums[right]`.
4. Place the larger square at the end of the result array.
5. Move the corresponding pointer inward.
6. Continue until all positions in the result array are filled.

✅ Pattern Used:
Two Pointer (Opposite Direction)

✅ Time & Space Complexity:
Time: O(n)  - Single pass using two pointers.
Space: O(n) - Output array to store squared values.
*/

function sortedSquares (nums) {
  let left = 0
  let right = nums.length - 1
  let pos = nums.length - 1
  const result = new Array(nums.length)

  while (left <= right) {
    const leftSq = nums[left] * nums[left]
    const rightSq = nums[right] * nums[right]

    if (leftSq > rightSq) {
      result[pos] = leftSq
      left++
    } else {
      result[pos] = rightSq
      right--
    }
    pos--
  }

  return result
}

// Example usage:
console.log(sortedSquares([-4, -1, 0, 3, 10]))
// [0, 1, 9, 16, 100]
