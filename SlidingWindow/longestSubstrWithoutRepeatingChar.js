/*
✅ Problem Statement:
Given a string `s`, find the length of the longest substring
without repeating characters.

✅ Input:
s = "abcabcbb"

✅ Output:
3   // "abc"

✅ Logic Explanation:
This is a Variable Size Sliding Window problem.
1. Use two pointers `left` and `right` to define the window.
2. Use a Set to store unique characters in the current window.
3. Expand the window by moving `right`.
4. If a duplicate character appears:
   - Shrink the window from the left until the duplicate is removed.
5. Update the maximum length during each valid window.

✅ Pattern Used:
Sliding Window (Variable Size)

✅ Time & Space Complexity:
Time: O(n)  - Each character is added and removed once.
Space: O(n) - Set stores at most `n` characters.
*/
// abcabcbb
{
  function longestSubstringWithoutRepeating (s) {
    const set = new Set()
    let left = 0
    let maxLen = 0

    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left])
        left++
      }

      set.add(s[right])
      maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
  }

  // Example usage:
  const s = 'abcabcbb'
  console.log(longestSubstringWithoutRepeating(s)) // Output: 3
}
