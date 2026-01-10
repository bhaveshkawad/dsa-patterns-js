/*
✅ Problem Statement:
Given two times `S` and `T` in HH:MM:SS format,
return the number of "interesting" times strictly between `S` and `T`.

A time is called interesting if the digital clock representation
(ignoring colons) contains at most 2 distinct digits.

✅ Input:
S = "15:15:00"
T = "15:15:12"

✅ Output:
1   // Only "15:15:11" is interesting

✅ Logic Explanation:
This is a Simulation + Digit Frequency problem.
1. Convert both times `S` and `T` into total seconds.
2. Iterate through each second from `S + 1` to `T - 1`.
3. Convert each second back to HHMMSS format.
4. Use a Set to count distinct digits in the time string.
5. If the number of distinct digits is ≤ 2, count it as interesting.
6. Return the total count.

✅ Pattern Used:
Simulation + Hashing (Set for distinct count)

✅ Time & Space Complexity:
Time: O(T - S)  - At most 86,400 seconds (one full day).
Space: O(1)     - At most 6 digits stored in the Set.
*/

// ✅ Input:
// S = "15:15:00"
// T = "15:15:12"

// ✅ Output:
// 1   // "15:15:11"

{
  function countInterestingTimes (S, T) {
    function toSeconds (time) {
      const [h, m, s] = time.split(':').map(Number)
      return h * 3600 + m * 60 + s
    }

    function toTimeString (sec) {
      const h = String(Math.floor(sec / 3600)).padStart(2, '0')
      const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0')
      const s = String(sec % 60).padStart(2, '0')
      return h + m + s // no colon
    }

    function isInteresting (timeStr) {
      const set = new Set(timeStr)
      return set.size <= 2
    }

    const start = toSeconds(S)
    const end = toSeconds(T)
    let count = 0

    for (let t = start + 1; t < end; t++) {
      if (isInteresting(toTimeString(t))) {
        count++
      }
    }

    return count
  }

  // Example usage:
  console.log(countInterestingTimes('15:15:00', '15:15:12')) // 1
}
