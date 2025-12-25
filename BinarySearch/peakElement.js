/**
 📘 Problem Statement:
 Given an array `nums`, find a peak element and return its index.
 A peak element is an element that is strictly greater than its neighbors.

 You may assume that `nums[i] != nums[i + 1]` for all valid i.

 📘 Input:
 const nums = [1, 3, 4, 6, 5, 2];

 📘 Output:
 3 // because nums[3] = 6 is a peak (greater than 4 and 5)

 🧠 Pattern Used: Modified Binary Search
*/

function findPeakElement (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[mid + 1]) {
      // We are on a downhill → possible peak on left or at mid
      right = mid
    } else {
      // We are on an uphill → peak lies to the right
      left = mid + 1
    }
  }

  // When left === right, we have found the peak
  return left
}

// ✅ Test Example
const nums = [1, 3, 4, 6, 5, 2]
console.log(findPeakElement(nums)) // Output: 3 (peak is 6)
