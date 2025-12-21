/*
✅ Problem Statement:
Sort an array of integers in ascending order using Quick Sort.

✅ Input:
arr = [8, 3, 5, 4, 7, 6, 1, 2]

✅ Output:
[1, 2, 3, 4, 5, 6, 7, 8]

✅ Logic Explanation:
- Choose a pivot (here we pick the last element).
- Partition the array so that elements smaller go left, bigger go right.
- Recursively apply quicksort on left and right partitions.
- Pivot naturally lands in its sorted place after partitioning.

✅ Pattern Used:
Divide & Conquer

✅ Time & Space Complexity:
Average: O(n log n)
Worst:   O(n²)   (if pivot choices are bad every time)
Space:   O(log n) recursion depth
*/

function quickSort (arr) {
  if (arr.length <= 1) return arr // base case

  const pivot = arr[arr.length - 1] // choose last element as pivot
  const left = []
  const right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // recursively sort left and right, then combine
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// Example usage:
console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2]))
// [1, 2, 3, 4, 5, 6, 7, 8]
