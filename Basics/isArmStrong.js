/**
📘 Problem:
Check whether a given number `n` is an **Armstrong number**.

🧠 What is an Armstrong Number?
An n-digit number is Armstrong if the sum of its digits raised to the power `n` equals the number itself.

✅ Examples:
- 153 → 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✔️
- 9474 → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 ✔️
- 123 → ❌ Not an Armstrong number

📥 Input:
n = 9474

📤 Output:
true

📦 Pattern: Digit Processing / Math
⏱ Time Complexity: O(d), where d = number of digits
*/

function isArmstrong (n) {
  const str = n.toString()
  const numDigits = str.length
  let sum = 0

  for (const digit of str) {
    sum += Math.pow(Number(digit), numDigits)
  }

  return sum === n
}

// 🧪 Test Cases
console.log(isArmstrong(153)) // true
console.log(isArmstrong(9474)) // true
console.log(isArmstrong(123)) // false
console.log(isArmstrong(370)) // true
