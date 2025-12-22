/*
✅ Problem Statement:
Given an array of integers `arr` and an integer `k`,
find the maximum sum of any contiguous subarray of size `k`.

✅ Input:
arr = [2, 1, 5, 1, 3, 2], k = 3

✅ Output:
9   // subarray [5, 1, 3]

✅ Logic Explanation:
This is a Fixed Size Sliding Window problem.
1. Maintain a running sum of the current window.
2. Add the current element as the window expands.
3. Once window size reaches `k`:
   - Update the maximum sum.
   - Remove the element going out of the window.
4. Continue sliding until the array ends.

✅ Pattern Used:
Sliding Window (Fixed Size)

✅ Time & Space Complexity:
Time: O(n)  - Each element is added and removed once.
Space: O(1) - Constant extra space.
*/

function maxSubarraySum (arr, k) {
  let windowSum = 0
  let maxSum = -Infinity

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i]

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[i - k + 1]
    }
  }
  return maxSum
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2]
const k = 3
console.log(maxSubarraySum(arr, k)) // Output: 9
