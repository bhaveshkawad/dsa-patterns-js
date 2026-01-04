/**
📘 Problem Statement:
Given an integer array `nums`, return the **third distinct maximum number**
in the array.

If the third maximum does not exist, return the **maximum number**.

📘 Input:
const nums = [3, 2, 1];

📘 Output:
1

📘 Input:
const nums = [1, 2];

📘 Output:
2

📘 Input:
const nums = [2, 2, 3, 1];

📘 Output:
1

🧠 Explanation:
We traverse the array once while keeping track of the
top three **distinct** maximum values:
- firstMax
- secondMax
- thirdMax

For each number:
- Ignore duplicates
- If number is greater than firstMax → shift values down
- Else if greater than secondMax → update second & third
- Else if greater than thirdMax → update third

If thirdMax never gets updated, it means fewer than
three distinct numbers exist, so we return firstMax.

Pattern Used: Array Traversal / Greedy (Max Tracking)
*/

function thirdMax (nums) {
  let firstMax = -Infinity
  let secondMax = -Infinity
  let thirdMax = -Infinity

  for (const num of nums) {
    // Skip duplicates
    if (num === firstMax || num === secondMax || num === thirdMax) {
      continue
    }

    if (num > firstMax) {
      thirdMax = secondMax
      secondMax = firstMax
      firstMax = num
    } else if (num > secondMax) {
      thirdMax = secondMax
      secondMax = num
    } else if (num > thirdMax) {
      thirdMax = num
    }
  }

  return thirdMax === -Infinity ? firstMax : thirdMax
}

// ✅ Test Examples
console.log(thirdMax([3, 2, 1])) // Output: 1
console.log(thirdMax([1, 2])) // Output: 2
console.log(thirdMax([2, 2, 3, 1])) // Output: 1
