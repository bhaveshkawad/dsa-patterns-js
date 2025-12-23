/*
✅ Problem Statement:
Given an array of integers `nums` and an integer `k`,
return the total number of continuous subarrays whose sum equals `k`.

✅ Input:
nums = [1, 2, 3], k = 3

✅ Output:
2
Explanation: Subarrays are [1, 2] and [3]

✅ Logic Explanation:
This is a Prefix Sum + HashMap problem.
1. Traverse the array while maintaining a running prefix sum.
2. At each index, check if `(currentSum - k)` exists in the HashMap.
   - If it exists, it means a subarray ending at the current index sums to `k`.
3. Store the frequency of each prefix sum in the HashMap.
4. Use a base case `map.set(0, 1)` to handle subarrays starting from index 0.
5. Accumulate the count of valid subarrays.

✅ Pattern Used:
Prefix Sum + HashMap (Frequency Map)

✅ Time & Space Complexity:
Time: O(n)  - Single pass through the array.
Space: O(n) - HashMap storing prefix sum frequencies.
*/

// ✅ Input:
// nums = [1, 2, 3, -3], k = 3

// ✅ Output:
// 2
// Explanation: Subarrays are [1, 2] and [3]

{
  function subarraySum (nums, k) {
    const map = new Map()
    map.set(0, 1) // Base case: prefix sum 0 seen once

    let currentSum = 0
    let count = 0

    for (const num of nums) {
      currentSum += num

      if (map.has(currentSum - k)) {
        count += map.get(currentSum - k)
      }

      map.set(currentSum, (map.get(currentSum) || 0) + 1)
    }

    return count
  }

  // Example usage:
  console.log(subarraySum([1, 2, 3, -3], 3)) // Output: 2
}
