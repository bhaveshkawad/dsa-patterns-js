/*
✅ Problem Statement:
Sort an array of integers in ascending order using Quick Sort.

✅ Input:
arr = [8, 3, 5, 2, 7, 6, 1, 4]

✅ Output:
[1, 2, 3, 4, 5, 6, 7, 8]

✅ Logic Explanation:
- Choose the last element as the pivot.
- Partition the array so that:
    • All elements smaller than pivot move to the left.
    • All larger elements stay on the right.
- Pivot is placed in its correct sorted position after partition.
- Recursively apply Quick Sort on the left and right partitions.

✅ Pattern Used:
Divide & Conquer + In-Place Partitioning

✅ Time & Space Complexity:
Average: O(n log n)
Worst:   O(n²)     (if pivot choice is consistently poor)
Space:   O(log n)  (recursion stack)
*/

function quickSortInPlace (arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high)
    quickSortInPlace(arr, low, pivotIndex - 1) // sort left
    quickSortInPlace(arr, pivotIndex + 1, high) // sort right
  }
  return arr
}

function partition (arr, low, high) {
  const pivot = arr[high] // choose last element as pivot
  let i = low // next index for smaller elements

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }

  // place pivot in correct position
  [arr[i], arr[high]] = [arr[high], arr[i]]
  return i // pivot's final index
}

// Example:
console.log(quickSortInPlace([8, 3, 5, 2, 7, 6, 1, 4]))
