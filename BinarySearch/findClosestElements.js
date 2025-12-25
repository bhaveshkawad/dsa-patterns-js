/**
📘 Problem Statement:
Given a sorted array `arr`, an integer `k`, and a target `x`,
return the `k` closest integers to `x` in the array.

The result should be sorted in ascending order. If there is a tie,
the smaller elements are preferred.

📘 Input:
const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 3;

📘 Output:
[1, 2, 3, 4]

🧠 Explanation:
We use binary search to find the best starting index of a window
of size `k` such that the elements in the window are closest to `x`.

We compare the distance between `x - arr[mid]` and `arr[mid + k] - x`
to decide if we need to shift the window left or right.

Pattern Used: Binary Search (on window start index)
*/

function findClosestElements (arr, k, x) {
  let left = 0
  let right = arr.length - k

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    // Compare the distances of the edges of the window
    const distLeft = Math.abs(x - arr[mid])
    const distRight = Math.abs(x - arr[mid + k])

    if (distLeft > distRight) {
      // Closer values lie on the right side
      left = mid + 1
    } else {
      // Closer values lie on the left side or this is already optimal
      right = mid
    }
  }

  // Slice out k elements starting from the best starting index
  return arr.slice(left, left + k)
}

// ✅ Test Example
const nums = [1, 2, 3, 6, 7, 8, 9, 10, 11]
const k = 4
const x = 7
console.log(findClosestElements(nums, k, x)) // Output : [ 6, 7, 8, 9 ]
