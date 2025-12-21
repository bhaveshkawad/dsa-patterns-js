/*
✅ Problem Statement:
Sort an array of integers in ascending order using Bubble Sort.

✅ Input:
arr = [5, 1, 4, 2, 8]

✅ Output:
[1, 2, 4, 5, 8]

✅ Logic Explanation:
- Bubble Sort repeatedly compares adjacent elements.
- If two elements are in the wrong order, swap them.
- After each full pass, the largest element “bubbles up” to the end.
- Repeat this for n-1 passes, or stop early if no swaps occur.

✅ Pattern Used:
Sorting (Bubble Sort - Repeated Adjacent Swapping)

✅ Time & Space Complexity:
Time: O(n²) average & worst, O(n) best case (already sorted with optimization)
Space: O(1) (in-place)
*/

// Example (Step-by-step):

// Array: [5, 1, 4, 2]

// Pass 1: [1, 4, 2, 5] → 5 moved to end

// Pass 2: [1, 2, 4, 5] → 4 in correct place

// Pass 3: [1, 2, 4, 5] → already sorted

function bubbleSort (arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // swap
        swapped = true
      }
    }
    if (!swapped) break // optimization: stop if already sorted
  }
  return arr
}

// Example usage:
console.log(bubbleSort([5, 1, 4, 2, 8])) // [1, 2, 4, 5, 8]
