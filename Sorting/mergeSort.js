/*
✅ Problem Statement:
Sort an array of integers in ascending order using Merge Sort (Divide & Conquer).

✅ Input:
arr = [8, 3, 5, 4, 7, 6, 1, 2]

✅ Output:
[1, 2, 3, 4, 5, 6, 7, 8]

✅ Logic Explanation:
- Base Case: If the array has 1 or fewer elements, it is already sorted.
- Recursive Case:
  1. Find the middle index.
  2. Recursively sort the left half and the right half.
  3. Merge the two sorted halves into one sorted array.
- Merging:
  - Compare the smallest elements of both halves.
  - Push the smaller one into a result array.
  - Continue until one half is exhausted, then append leftovers.

✅ Pattern Used:
Divide & Conquer

✅ Time & Space Complexity:
Time: O(n log n) → log n levels × O(n) work per level
Space: O(n)      → extra array needed for merging
*/

function mergeSort (arr) {
  if (arr.length <= 1) return arr // base case

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge (left, right) {
  const result = []
  let i = 0; let j = 0

  // merge two sorted arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  // append remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Example usage:
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
