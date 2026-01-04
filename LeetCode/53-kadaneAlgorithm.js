/*
✅ Problem Statement:
Given an integer array `nums`, find the **contiguous subarray**
(containing at least one number) which has the **maximum sum**,
and return its sum.

✅ Input:
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

✅ Output:
6
// Subarray: [4, -1, 2, 1]

✅ Logic Explanation:
This problem is solved using **Kadane’s Algorithm**.

We keep track of two values:
1. `currentSum` → maximum subarray sum ending at current index
2. `maxSum`     → maximum subarray sum found so far

Algorithm steps:
1. Initialize both `currentSum` and `maxSum` with the first element.
2. Traverse the array from index 1 onward:
   - At each element, decide whether to:
     - Start a new subarray from current element
     - OR extend the previous subarray
     → `currentSum = max(nums[i], currentSum + nums[i])`
3. Update `maxSum` if `currentSum` is greater.
4. After traversal, `maxSum` contains the answer.

This works because a **negative running sum only reduces future sums**,
so we discard it and start fresh.

✅ Pattern Used:
Dynamic Programming (Kadane’s Algorithm)

✅ Time & Space Complexity:
Time: O(n)  - Single pass through the array
Space: O(1) - Constant extra space
*/

{
  function maxSubArray (nums) {
    let currentSum = nums[0] // max sum ending at current index
    let maxSum = nums[0] // max sum found so far

    for (let i = 1; i < nums.length; i++) {
      // Step 1: choose best between starting fresh or extending
      currentSum = Math.max(nums[i], currentSum + nums[i])

      // Step 2: update global maximum
      maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
  }

  // Example usage:
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  console.log(maxSubArray(nums)) // Output: 6
}
