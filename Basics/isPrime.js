/**
📘 Problem:
Check whether a given number is a prime number.

🧠 What is a Prime Number?
A prime number is a number greater than 1 that has exactly two distinct positive divisors:
1 and itself.
➡️ Examples: 2, 3, 5, 7, 11
❌ Not Prime: 1 (only one divisor), 4 (divisible by 1, 2, 4)

📥 Input:
n = 29

📤 Output:
true

⏱ Time Complexity:
- Naive: O(n)
- Optimized: O(√n)
*/

function isPrime (n) {
  if (n <= 1) return false
  if (n === 2) return true

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }

  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(19)) // true
console.log(isPrime(20)) // false
