/**
📘 Problem Statement:
Given an integer array `arr`, find the second largest distinct number
in the array. If it does not exist, return `null`.

📘 Input:
const arr = [10, 5, 20, 8];

📘 Output:
10

🧠 Explanation:
We iterate through the array once while maintaining two variables:
`largest` and `secondLargest`.

- If the current number is greater than `largest`,
  update `secondLargest` and then update `largest`.
- If the current number is smaller than `largest` but greater than
  `secondLargest`, update `secondLargest`.

This approach avoids sorting and works in one pass.

Pattern Used: Array Traversal / Greedy
*/

function secondMax (arr) {
  if (arr.length < 2) return null

  let largest = -Infinity
  let secondLargest = -Infinity

  for (const num of arr) {
    if (num > largest) {
      secondLargest = largest
      largest = num
    } else if (num > secondLargest && num < largest) {
      secondLargest = num
    }
  }

  return secondLargest === -Infinity ? null : secondLargest
}

// ✅ Test Examples
console.log(secondMax([10, 5, 20, 8])) // Output: 10
console.log(secondMax([5, 5, 5])) // Output: null
console.log(secondMax([-10, -3, -1, -20])) // Output: -3
