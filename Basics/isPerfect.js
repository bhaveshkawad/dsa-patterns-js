/**
📘 Problem:
A **perfect number** is a positive integer equal to the sum of its **proper divisors** (excluding itself).

🧠 What does that mean?
- Divisors of 28 → 1, 2, 4, 7, 14, 28
- Proper divisors = 1 + 2 + 4 + 7 + 14 = 28 → ✔️ Perfect number

📥 Input:
n = 28

📤 Output:
true

📦 Pattern: Math / Divisor Sum
⏱ Time Complexity: O(√n)
*/

function isPerfectNumber (n) {
  if (n <= 1) return false

  let sum = 1

  // Loop up to sqrt(n)
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i

      if (i !== n / i) {
        sum += n / i
      }
    }
  }

  return sum === n
}

// 🧪 Test Cases
console.log(isPerfectNumber(28)) // true
console.log(isPerfectNumber(6)) // true
console.log(isPerfectNumber(12)) // false
console.log(isPerfectNumber(496)) // true
