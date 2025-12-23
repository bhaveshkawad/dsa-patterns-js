/*
✅ Problem Statement:
Given an array of integers `nums` and an integer `k`,
return the length of the longest subarray whose sum equals `k`.

✅ Input:
nums = [1, -1, 5, -2, 3], k = 3

✅ Output:
4
Explanation: Subarray [1, -1, 5, -2] has sum = 3 and length = 4

✅ Logic Explanation:
This is a Prefix Sum + HashMap problem (store FIRST occurrence).
1. Traverse the array while maintaining a running prefix sum.
2. For each index, check if `(currentSum - k)` exists in the HashMap.
   - If it exists, a subarray ending at the current index sums to `k`.
3. To maximize length, store ONLY the FIRST index where a prefix sum appears.
4. Use base case `map.set(0, -1)` to allow subarrays starting from index 0.
5. Update the maximum length whenever a valid subarray is found.

✅ Pattern Used:
Prefix Sum + HashMap (Store First Occurrence)

✅ Time & Space Complexity:
Time: O(n)  - Single pass through the array.
Space: O(n) - HashMap storing prefix sums.
*/

// ✅ Input:
// nums = [1, -1, 5, -1, 3], k = 3

{
  function longestSubarraySumK (nums, k) {
    const map = new Map()
    map.set(0, -1) // Base case for subarrays starting at index 0

    let currentSum = 0
    let maxLen = 0

    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i]

      if (map.has(currentSum - k)) {
        maxLen = Math.max(maxLen, i - map.get(currentSum - k))
      }

      // Store FIRST occurrence only
      if (!map.has(currentSum)) {
        map.set(currentSum, i)
      }
    }

    return maxLen
  }

  // Example usage:
  console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)) // Output: 4
}
