/*
✅ Problem Statement:
Write an algorithm to determine if a given number is a “happy number”.

A number is happy if you:
1. Replace it with the sum of the squares of its digits,
2. Repeat the process, and
3. Eventually reach 1.

If it loops endlessly without reaching 1, it's not happy.

✅ Input:
n = 19

✅ Output:
true

✅ Logic Explanation:
- Use a helper function to calculate the sum of squares of digits.
- Apply Fast & Slow Pointers (like in cycle detection):
   - slow moves 1 step at a time
   - fast moves 2 steps at a time
- If both meet at 1 → happy number
- If both meet somewhere else → cycle detected → not happy

✅ Pattern Used:
Fast & Slow Pointers

✅ Time & Space Complexity:
Time: O(log n) per iteration (since digit sum reduces fast)
Space: O(1) — no extra memory used
*/

function getNext (n) {
  let sum = 0
  while (n > 0) {
    const digit = n % 10
    sum += digit * digit
    n = Math.floor(n / 10)
  }
  return sum
}

function isHappy (n) {
  let slow = n
  let fast = getNext(n)

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow) // 1 step
    fast = getNext(getNext(fast)) // 2 steps
  }

  return fast === 1
}

// ✅ Example usage:
console.log(isHappy(19)) // true
console.log(isHappy(2)) // false
