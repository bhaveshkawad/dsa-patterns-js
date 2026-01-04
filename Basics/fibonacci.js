/**
📘 Problem Statement:
Given an integer `n`, return the `n`th Fibonacci number.

The Fibonacci sequence is defined as:
F(0) = 0
F(1) = 1
F(n) = F(n - 1) + F(n - 2)

📘 Input:
const n = 6;

📘 Output:
8

🧠 Explanation:
Each Fibonacci number depends on the previous two numbers.
Instead of using recursion (which repeats calculations),
we use an iterative Dynamic Programming approach.

We maintain only the last two Fibonacci values and update them
step by step until we reach `n`.

Pattern Used: Dynamic Programming (Bottom-Up, Space Optimized)
*/

// The Fibonacci sequence is defined as:
// F(0) = 0
// F(1) = 1
// F(n) = F(n - 1) + F(n - 2)

// 📘 Input:
// const n = 6;

// 📘 Output:
// 8

function fibonacci (n) {
  if (n <= 1) return n

  let prev = 0
  let curr = 1

  for (let i = 2; i <= n; i++) {
    const next = prev + curr
    prev = curr
    curr = next
  }

  return curr
}

// ✅ Test Example
const n = 5
console.log(fibonacci(n)) // Output: 8
