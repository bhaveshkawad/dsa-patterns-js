/**
📘 Problem Statement:
Given a rotated sorted array of **distinct** integers `nums`, and an integer `target`,
return the index of `target` if it exists in the array. Otherwise, return -1.

The array was originally sorted in ascending order, but then rotated at an unknown pivot.

📘 Input:
const nums = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
const target = 3;

📘 Output:
5

🧠 Explanation:
We use a modified binary search.
At each step:
- One half of the array is always sorted.
- We check whether the target lies in that sorted half.
- If yes, we discard the other half.
- If not, we search the unsorted half.

This logic is applied repeatedly to narrow down the search.

Pattern Used: Binary Search in Rotated Sorted Array
Time Complexity: O(log n)
*/

function search (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    // 🎯 Found the target
    if (nums[mid] === target) return mid

    // ✅ Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1 // Go left
      } else {
        left = mid + 1 // Go right
      }
    } else {
    // ✅ Right half is sorted

      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1 // Go right
      } else {
        right = mid - 1 // Go left
      }
    }
  }

  // ❌ Target not found
  return -1
}

// ✅ Test
const nums = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
const target = 3
console.log(search(nums, target)) // Output: 5
