/*
✅ Problem Statement:
Given two sorted integer arrays `nums1` and `nums2`,
merge `nums2` into `nums1` as one sorted array.
Assume `nums1` has a size of `m + n`, where the first `m` elements are valid
and the last `n` elements are empty.

✅ Input:
nums1 = [1, 3, 5, 0, 0, 0], m = 3
nums2 = [2, 4, 6], n = 3

✅ Output:
nums1 = [1, 2, 3, 4, 5, 6]

✅ Logic Explanation:
This is a Two Pointer problem using reverse traversal.
1. Initialize three pointers:
   - `i` at the last valid index of `nums1` (m - 1)
   - `j` at the last index of `nums2` (n - 1)
   - `k` at the last index of `nums1` (m + n - 1)
2. Compare `nums1[i]` and `nums2[j]`.
3. Place the larger element at index `k`.
4. Move the corresponding pointer backward.
5. After one array is exhausted, copy remaining elements from `nums2`.

✅ Pattern Used:
Two Pointer (Reverse Direction)

✅ Time & Space Complexity:
Time: O(m + n)  - Each element is processed once.
Space: O(1)     - In-place merge with no extra space.
*/

function merge (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [2, 5, 6]
merge(nums1, 3, nums2, 3)
console.log(nums1) // [1, 2, 2, 3, 5, 6]
