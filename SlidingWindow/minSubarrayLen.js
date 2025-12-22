/*
✅ Problem Statement:
Given an array of positive integers `arr` and a positive integer `target`,
find the minimal length of a contiguous subarray
whose sum is greater than or equal to `target`.
If no such subarray exists, return 0.

✅ Input:
arr = [2, 3, 1, 2, 4, 3], target = 7

✅ Output:
2   // subarray [4, 3]

✅ Logic Explanation:
This is a Variable Size Sliding Window problem.
1. Use two pointers `left` and `right` to form a window.
2. Expand the window by adding elements until sum >= target.
3. Once valid, try shrinking from the left to minimize length.
4. Update the minimum length during each valid window.

✅ Pattern Used:
Sliding Window (Variable Size – Sum Based)

✅ Time & Space Complexity:
Time: O(n)  - Each element is processed at most twice.
Space: O(1) - Constant extra space.
*/
// [2, 3, 1, 2, 4, 3]
{
  function minSubArrayLen (target, arr) {
    let left = 0
    let windowSum = 0
    let minLen = Infinity

    for (let right = 0; right < arr.length; right++) {
      windowSum += arr[right]

      while (windowSum >= target) {
        minLen = Math.min(minLen, right - left + 1)
        windowSum -= arr[left]
        left++
      }
    }

    return minLen === Infinity ? 0 : minLen
  }

  // Example usage:
  const arr = [2, 3, 1, 2, 4, 3]
  const target = 7
  console.log(minSubArrayLen(target, arr)) // Output: 2
}
