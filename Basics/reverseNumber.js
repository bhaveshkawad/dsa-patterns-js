/**
📘 Problem:
Given a positive integer `n`, return the reversed number.

🧠 Logic:
- Extract digits one by one using `% 10`
- Add it to result by multiplying result by 10 each time
- Continue until number becomes 0

📥 Input:
n = 1234

📤 Output:
4321

📦 Pattern: Basic Math / Number Manipulation
⏱ Time Complexity: O(log₁₀n) — proportional to number of digits
*/

function reverseNumber (n) {
  let reversed = 0

  while (n > 0) {
    const digit = n % 10 // Get the last digit
    reversed = reversed * 10 + digit // Add digit to reversed
    n = Math.floor(n / 10) // Remove last digit
  }

  return reversed
}

// 🧪 Test Cases
console.log(reverseNumber(1234)) // 4321
console.log(reverseNumber(100)) // 1
console.log(reverseNumber(987654)) // 456789
