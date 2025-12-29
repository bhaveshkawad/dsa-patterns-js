/*
✅ Problem Statement:
Given an array of integers, for each element, find the **next greater element to its right**.
If there is no such greater element, return `-1` for that position.

The next greater element for an element `x` is the first element to the right of `x`
that is strictly greater than `x`.

✅ Input:
An integer array:
[2, 1, 2, 4, 3]

✅ Output:
[4, 2, 4, -1, -1]

✅ Logic Explanation:
We use a **Monotonic Decreasing Stack** to efficiently find the next greater element.

- Initialize a result array filled with `-1`
- Use a stack to store **indices** of elements whose next greater element is not found yet
- Traverse the array from **left to right**
- For each element:
  → While the stack is not empty and the current element is greater than the element
    at the index stored on the top of the stack:
      - Pop the index from the stack
      - Set result[poppedIndex] = current element
  → Push the current index onto the stack
- After traversal, any indices left in the stack do not have a next greater element,
  so their result remains `-1`

This works because each element is pushed and popped at most once.

✅ Pattern Used:
Monotonic Stack (Decreasing)

✅ Language Used:
JavaScript

✅ Time & Space Complexity:
Time: O(n) — Each element is processed once
Space: O(n) — Stack and result array
*/

function nextGreaterElements (nums) {
  const result = Array(nums.length).fill(-1) // Step 1: Fill result with default -1s
  const stack = [] // Step 2: Stack to hold indices

  for (let i = 0; i < nums.length; i++) {
    // Step 3: While current num is greater than num at stack top index
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      const idx = stack.pop() // Step 4: Pop index
      result[idx] = nums[i] // Step 5: Current element is the next greater
    }
    stack.push(i) // Step 6: Push current index to stack
  }

  return result
}

// 🔸 Example:
console.log(nextGreaterElements([2, 1, 2, 4, 3]))
// Output: [4, 2, 4, -1, -1]
