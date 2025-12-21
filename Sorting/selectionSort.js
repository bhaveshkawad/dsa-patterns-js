/*
✅ Problem Statement:
Sort an array of integers in ascending order using Selection Sort.

✅ Input:
arr = [64, 25, 12, 22, 11]

✅ Output:
[11, 12, 22, 25, 64]

✅ Logic Explanation:
- Divide the array into sorted and unsorted parts.
- For each index i:
  - Find the smallest element in the unsorted part.
  - Swap it with arr[i].
- After n-1 passes, the array becomes sorted.

✅ Pattern Used:
Sorting (Selection Sort - Find Minimum & Swap)

✅ Time & Space Complexity:
Time: O(n²) in all cases (because we always scan the unsorted part)
Space: O(1) (in-place)
*/

function selectionSort (arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j // update index of minimum
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] // swap
  }
  return arr
}

// Example usage:
console.log(selectionSort([64, 25, 12, 22, 11])) // [11, 12, 22, 25, 64]
