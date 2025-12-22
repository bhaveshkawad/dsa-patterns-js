/*
✅ Problem Statement:
Given two strings `s` and `t`, return the minimum window substring of `s`
such that every character in `t` (including frequency) is included in the window.
If no such substring exists, return an empty string.

✅ Input:
s = "ADOBECODEBANC", t = "ABC"

✅ Output:
"BANC"

✅ Logic Explanation:
This is a Variable Size Sliding Window problem with exact frequency matching.
1. Build a frequency map (`needMap`) for string `t`.
2. Use two pointers `left` and `right` to create a sliding window.
3. Expand the window by moving `right` and update window frequencies.
4. When all required characters are satisfied (`formed === required`):
   - Try shrinking the window from the left to minimize length.
5. Keep track of the minimum valid window found.

✅ Pattern Used:
Sliding Window (Variable Size – Exact Frequency Match)

✅ Time & Space Complexity:
Time: O(n)  - Each character is processed at most twice.
Space: O(n) - Frequency maps.
*/

{
  function minWindow (s, t) {
    if (t.length === 0 || s.length === 0) return ''

    const need = new Map() // Characters and counts we need
    const window = new Map() // Characters and counts in current window

    // Step 1: Build the frequency map of t
    for (const char of t) {
      need.set(char, (need.get(char) || 0) + 1)
    }

    let have = 0
    const needSize = need.size

    let left = 0
    let minLen = Infinity
    let minStart = 0

    // Step 2: Expand the window with right pointer
    for (let right = 0; right < s.length; right++) {
      const char = s[right]
      window.set(char, (window.get(char) || 0) + 1)

      if (need.has(char) && window.get(char) === need.get(char)) {
        have++
      }

      // Step 3: Try to shrink window from the left
      while (have === needSize) {
        // Update result if smaller window is found
        if ((right - left + 1) < minLen) {
          minLen = right - left + 1
          minStart = left
        }

        const leftChar = s[left]
        window.set(leftChar, window.get(leftChar) - 1)

        if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
          have--
        }

        left++
      }
    }
    return minLen === Infinity ? '' : s.slice(minStart, minStart + minLen)
  }

  // Example usage:
  console.log(minWindow('ADOBECODEBANC', 'ABC')) // Output: "BANC"
}
