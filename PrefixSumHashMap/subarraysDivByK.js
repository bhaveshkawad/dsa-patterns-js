/*
✅ Problem Statement:
Given an integer array `nums` and an integer `k`,
return the number of non-empty subarrays whose sum is divisible by `k`.

✅ Input:
nums = [4, 5, 0, -2, -3, 1], k = 5

✅ Output:
7

✅ Logic Explanation:
This is a Prefix Sum + HashMap problem using modulo arithmetic.
1. Maintain a running prefix sum while traversing the array.
2. Compute `remainder = prefixSum % k` at each index.
3. If the same remainder has appeared before, the subarray between them
   has a sum divisible by `k`.
4. Store the frequency of each remainder in a HashMap.
5. Normalize negative remainders using:
   `(remainder + k) % k`.
6. Initialize the map with `map.set(0, 1)` to count subarrays starting at index 0.

✅ Pattern Used:
Prefix Sum + HashMap (Modulo Frequency Map)

✅ Time & Space Complexity:
Time: O(n)  - Single pass through the array.
Space: O(k) - At most `k` remainders stored in the map.
*/

{
  function subarraysDivByK (nums, k) {
    const map = new Map()
    map.set(0, 1) // Base case

    let prefixSum = 0
    let count = 0

    for (const num of nums) {
      prefixSum += num

      // Normalize remainder to handle negatives
      const remainder = ((prefixSum % k) + k) % k

      if (map.has(remainder)) {
        count += map.get(remainder)
      }

      map.set(remainder, (map.get(remainder) || 0) + 1)
    }

    return count
  }

  // Example usage:
  console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)) // Output: 7
}
