/**
📘 Problem Statement:
Given an m x n integer matrix `matrix`,
if an element is 0, set its entire row and column to 0.

📘 Brute Force Approach:
For every cell that contains 0:
- Set all elements in its row to 0
- Set all elements in its column to 0

⚠️ Problem:
If we directly modify the matrix, newly created 0s will
affect other rows and columns incorrectly.

🧠 Solution Idea (Brute Force – Safe):
- First, record all rows and columns that need to be zeroed
- Then, update the matrix in a second pass

Pattern Used: Matrix Traversal + Extra Space
*/

function setZeroesBrute (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const zeroRows = new Set()
  const zeroCols = new Set()

  // Step 1: Find all rows and columns that contain 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i)
        zeroCols.add(j)
      }
    }
  }

  // Step 2: Set rows to 0
  for (const r of zeroRows) {
    for (let j = 0; j < cols; j++) {
      matrix[r][j] = 0
    }
  }

  // Step 3: Set columns to 0
  for (const c of zeroCols) {
    for (let i = 0; i < rows; i++) {
      matrix[i][c] = 0
    }
  }
}

/**
📘 Problem Statement:
Given an m x n integer matrix `matrix`,
if an element is 0, set its entire row and column to 0.

You must do it IN-PLACE.

📘 Optimized Approach:
To avoid extra space, use the matrix itself as a marker.

🧠 Key Idea:
- Use the FIRST ROW to mark columns that need to be zero
- Use the FIRST COLUMN to mark rows that need to be zero
- Use two flags to remember whether the first row or first column
  originally contained a zero

Steps:
1️⃣ Check if the first row contains a zero
2️⃣ Check if the first column contains a zero
3️⃣ Use first row & column as markers
4️⃣ Set cells to zero using markers
5️⃣ Finally update first row & first column if needed

Pattern Used: Matrix Traversal + In-Place Marking
*/

function setZeroes (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  let firstRowZero = false
  let firstColZero = false

  // Step 1: Check first row
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true
      break
    }
  }

  // Step 2: Check first column
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true
      break
    }
  }

  // Step 3: Mark rows and columns
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  // Step 4: Update matrix using markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // Step 5: Zero out first row if needed
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0
    }
  }

  // Step 6: Zero out first column if needed
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0
    }
  }
}

const matrix =
[
  [1, 0, 3],
  [4, 5, 6],
  [7, 0, 9]
]

setZeroesBrute(matrix)
console.log(matrix)

const matrix1 =
[
  [1, 0, 3],
  [4, 5, 6],
  [7, 0, 9]
]

setZeroes(matrix1)
console.log(matrix1)
