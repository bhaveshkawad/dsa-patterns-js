/**
📘 Problem Statement:
You are given a rotated sorted array of **distinct** integers `nums`.
Return the **minimum element** in the array.

📘 Input:
const nums = [4, 5, 6, 7, 0, 1, 2];

📘 Output:
0

🧠 Explanation:
We apply binary search to find the "inflection point" — the point where the rotation happens.
This is where the next element is smaller than the current one.
That point is the **minimum**.

If nums[mid] > nums[right], the min is in the right half.
Else, the min is in the left half or at mid.

Pattern Used: Binary Search on Rotated Array (Find Minimum)
Time Complexity: O(log n)
*/

// 📘 Input:
// const nums = [4, 5, 6, 7, 0, 1, 2];
// [ 0, 1, 2, 4, 5, 6, 7]
// 📘 Output:
// 0

function findMax (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2)
    if (nums[mid] > nums[left]) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return nums[left]
}

function findMax1 (nums) {
  // Find min and min index - 1 if array is rotated
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      // Min is to the right
      left = mid + 1
    } else {
      // Min is at mid or to the left
      right = mid
    }
  }

  return left === 0 ? nums[nums.length - 1] : nums[left - 1]
}

function findMin (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      // Min is to the right
      left = mid + 1
    } else {
      // Min is at mid or to the left
      right = mid
    }
  }

  return nums[left] // or nums[right], both are same when loop ends
}

// ✅ Test
const nums = [2, 4, 5, 6, 0, 1]
console.log(findMin(nums)) // Output: 0
/** Rotated Array Example */
console.log(findMax([2, 3, 4, 5, 6, 7, 0, 1])) // Output: 7
console.log(findMax1([2, 3, 4, 5, 6, 7, 0, 1]))
/** Linear Array Example */
console.log(findMax([0, 1, 2, 3, 4, 5, 6, 7]))
console.log(findMax1([0, 1, 2, 3, 4, 5, 6, 7]))
