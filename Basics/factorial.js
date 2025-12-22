/**
📘 Problem:
Given a non-negative integer `n`, return the factorial of `n`.

🧠 What is Factorial?
- Factorial of `n` (written as `n!`) is the product of all positive integers up to `n`.
- Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

📥 Input:
n = 5

📤 Output:
120

📦 Pattern: Basic Math / Recursion / Loop
⏱ Time Complexity: O(n)
*/

// ✅ Iterative Approach
function factorialIterative (n) {
  if (n < 0) return -1 // Factorial not defined for negative numbers

  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

// ✅ Recursive Approach (for understanding)
function factorialRecursive (n) {
  if (n < 0) return -1
  if (n === 0 || n === 1) return 1

  return n * factorialRecursive(n - 1)
}

// 🧪 Test Cases
console.log(factorialIterative(5)) // 120
console.log(factorialIterative(0)) // 1
console.log(factorialRecursive(4)) // 24
console.log(factorialRecursive(1)) // 1
