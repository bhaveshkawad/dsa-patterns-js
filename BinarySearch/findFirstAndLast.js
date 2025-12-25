/**
📘 Problem Statement:
Given an array of integers `nums` sorted in non-decreasing order, and an integer `target`,
return the **starting and ending position** of the target value.

If the target is not found in the array, return [-1, -1].

🔍 Input:
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

🎯 Output:
[3, 4]

🧠 Explanation:
We run **two binary searches**:
1. One to find the **first occurrence**
2. One to find the **last occurrence**

Each search uses binary search logic slightly tweaked to stop at the boundary.

Quote: "To find boundaries in sorted arrays, tweak binary search to keep narrowing even after a match."

Pattern Used: Binary Search for Boundaries
Time Complexity: O(log n)
*/

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

function searchRange (nums, target) {
  return [findFirst(nums, target), findLast(nums, target)]
}

function findFirst (nums, target) {
  let left = 0; let right = nums.length - 1; let index = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }

    if (nums[mid] === target) index = mid // Save answer and move left
  }

  return index
}

function findLast (nums, target) {
  let left = 0; let right = nums.length - 1; let index = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }

    if (nums[mid] === target) index = mid // Save answer and move right
  }

  return index
}

// ✅ Test
const nums = [5, 7, 7, 8, 8, 10]
const target = 8
console.log(searchRange(nums, target)) // Output: [3, 4]
