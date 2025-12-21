/*
✅ Problem Statement:
Sort an array of integers in ascending order using Insertion Sort (basic nested for loop version).

✅ Input:
arr = [5, 3, 4, 1]

✅ Output:
[1, 3, 4, 5]

✅ Logic Explanation:
- Start from the second element (i = 1).
- Compare arr[i] with all elements in the sorted part (j loop goes backward).
- Swap until the element is in the correct position.
- Continue until the array is sorted.

✅ Pattern Used:
Sorting (Insertion Sort - Insert into Sorted Subarray)

✅ Time & Space Complexity:
Time: O(n²) average & worst, O(n) best case (already sorted)
Space: O(1) (in-place)
*/

function insertionSort (arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]] // swap
      } else {
        break // already in correct place
      }
    }
  }
  return arr
}

// Example usage:
console.log(insertionSort([5, 3, 4, 1])) // [1, 3, 4, 5]
