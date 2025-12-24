/*
✅ Problem Statement:
Given an integer array `nums`,
return all unique triplets `[nums[i], nums[j], nums[k]]`
such that:
i != j, j != k, and i != k
and nums[i] + nums[j] + nums[k] == 0.

The solution must not contain duplicate triplets.

✅ Input:
nums = [-1, 0, 1, 2, -1, -4]

✅ Output:
[[-1, -1, 2], [-1, 0, 1]]

✅ Logic Explanation:
This problem is solved using Sorting + Two Pointer.
1. Sort the array in ascending order.
2. Fix one element at index `i` using a loop.
3. Use two pointers:
   - `left` starting from `i + 1`
   - `right` starting from the end of the array
4. Calculate the sum of three elements.
5. If the sum is 0, store the triplet and move both pointers
   while skipping duplicates.
6. If the sum is less than 0, move `left` forward.
7. If the sum is greater than 0, move `right` backward.
8. Skip duplicate values for `i` to avoid repeated triplets.

✅ Pattern Used:
Two Pointer (with Sorting)

✅ Time & Space Complexity:
Time: O(n²) - Outer loop + two-pointer scan.
Space: O(1) - Ignoring output storage.
*/

function threeSum (nums) {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// [[-1, -1, 2], [-1, 0, 1]]
