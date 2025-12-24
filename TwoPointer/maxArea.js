/*
✅ Problem Statement:
Given an integer array `height` where each element represents the height
of a vertical line on the x-axis, find two lines that together with the x-axis
form a container that holds the maximum amount of water.

Return the maximum amount of water that can be stored.

✅ Input:
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

✅ Output:
49

✅ Logic Explanation:
This is a Two Pointer problem using opposite-direction pointers.
1. Initialize two pointers:
   - `left` at the beginning of the array
   - `right` at the end of the array
2. The water area is calculated as:
   min(height[left], height[right]) * (right - left)
3. The height of the container is always limited by the shorter line.
4. To potentially increase the area, move the pointer pointing to the shorter line:
   - If `height[left] < height[right]`, move `left` forward
   - Otherwise, move `right` backward
5. Continue until the two pointers meet, tracking the maximum area found.

✅ Pattern Used:
Two Pointer (Opposite Direction)

✅ Time & Space Complexity:
Time: O(n)  - Single pass using two pointers.
Space: O(1) - No extra space used.
*/

function maxArea (height) {
  let left = 0
  let right = height.length - 1
  let maxWater = 0

  while (left < right) {
    const area =
      Math.min(height[left], height[right]) * (right - left)

    maxWater = Math.max(maxWater, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxWater
}

// Example usage:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
