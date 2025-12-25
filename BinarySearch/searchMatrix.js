/**
📘 Problem Statement:
You are given an `m x n` 2D matrix where each row is sorted in ascending order from left to right,
and the first integer of each row is greater than the last integer of the previous row.

Given an integer `target`, return true if it exists in the matrix, otherwise return false.

🔍 Input:
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;

🎯 Output:
true

🧠 Explanation:
We can treat the matrix as a **flattened sorted array** (1D view) and apply binary search.

Index mapping logic:
- `row = Math.floor(mid / cols)`
- `col = mid % cols`

Quote: "When a 2D matrix is globally sorted, flatten it virtually and use regular binary search."

Pattern Used: Binary Search over 2D → 1D mapping
Time Complexity: O(log(m * n))
Space: O(1)
*/

// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60]
// ];
// const target = 3;
/**
 * row = 3, column = 4, total = 12
 * left = 0 , right = 11 , mid = 5
 */

function searchMatrix (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false

  const rows = matrix.length
  const cols = matrix[0].length
  let left = 0
  let right = rows * cols - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const row = Math.floor(mid / cols)
    const col = mid % cols
    const midValue = matrix[row][col]

    if (midValue === target) return true
    if (midValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}

// ✅ Test
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]
const target = 3
console.log(searchMatrix(matrix, target)) // Output: true
