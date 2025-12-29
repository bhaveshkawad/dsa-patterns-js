/*
✅ Problem Statement:
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.

✅ Input:
heights = [2, 1, 5, 6, 2, 3]

✅ Output:
10

✅ Logic Explanation:
We use a monotonic increasing stack to keep track of bar indices.
As we iterate through the array:
- While the current bar is shorter than the bar at the top of the stack:
  • Pop the top index
  • Calculate height = heights[popped index]
  • Width = distance from current index to new stack top index - 1
  • Area = height × width
- Push current index onto the stack
After traversal, process remaining bars in the stack the same way.

✅ Pattern Used:
Monotonic Stack (Increasing)

✅ Time & Space Complexity:
Time: O(n) - Each element is pushed and popped once
Space: O(n) - Stack holds indices
*/

function largestRectangleArea (heights) {
  const stack = [-1] // Sentinel to handle empty stack width calculation
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] !== -1 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()]
      const width = i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  while (stack[stack.length - 1] !== -1) {
    const height = heights[stack.pop()]
    const width = heights.length - stack[stack.length - 1] - 1
    maxArea = Math.max(maxArea, height * width)
  }

  return maxArea
}

// Example usage:
const heights = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(heights)) // Output: 10
