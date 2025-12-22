/*
✅ Problem Statement:
Given a string `s` and an integer `k`,
return the length of the longest substring
that contains at most `k` distinct characters.

✅ Input:
s = "eceba", k = 2

✅ Output:
3   // "ece"

✅ Logic Explanation:
This is a Variable Size Sliding Window problem.
1. Use two pointers `left` and `right` to represent a window.
2. Use a Map to store character frequencies inside the window.
3. Expand the window by moving `right` and adding characters.
4. If the number of distinct characters exceeds `k`:
   - Shrink the window from the left until it becomes valid.
5. Update the maximum length whenever the window is valid.

✅ Pattern Used:
Sliding Window (Variable Size – At Most K Distinct)

✅ Time & Space Complexity:
Time: O(n)  - Each character is added and removed once.
Space: O(k) - At most `k` distinct characters in the map.
*/

// ✅ Input:
// s = "eceba", k = 2

// ✅ Output:
// 3   // "ece"

{
  function longestSubstringKDistinct (s, k) {
    let left = 0
    let maxLen = 0
    const map = new Map()

    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1)

      while (map.size > k) {
        map.set(s[left], map.get(s[left]) - 1)
        if (map.get(s[left]) === 0) {
          map.delete(s[left])
        }
        left++
      }

      maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen
  }

  // Example usage:
  console.log(longestSubstringKDistinct('eceba', 2)) // Output: 3
  console.log(longestSubstringKDistinct('aa', 1)) // Output: 2
}
