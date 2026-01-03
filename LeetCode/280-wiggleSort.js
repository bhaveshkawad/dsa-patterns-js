/**
📘 Problem Statement:
Given an integer array `nums`, reorder it such that:

nums[0] <= nums[1] >= nums[2] <= nums[3] >= ...

That means:
- Even indices → valleys
- Odd indices → peaks

You may assume the input array always has a valid answer.

📘 Input:
const nums = [3, 5, 2, 1, 6, 4]

📘 Output:
One valid output:
[3, 5, 1, 6, 2, 4]

🧠 Explanation (High Level):
The problem does NOT require sorting the array.
It only requires enforcing a local "zig-zag" (wiggle) relationship
between adjacent elements.

We will solve this in two ways:
1️⃣ Brute Force (Sorting-based)
2️⃣ Optimized Greedy (One-pass, O(n))
*/

/**
🧠 Brute Force Idea:
1. Sort the array to clearly separate small and large values
2. Split into two halves:
   - smaller half → valleys
   - larger half → peaks
3. Reverse both halves (important to handle duplicates)
4. Interleave:
   - even indices ← valleys
   - odd indices  ← peaks

Pattern Used: Sorting + Array Manipulation
Time Complexity: O(n log n)
Space Complexity: O(n)
*/

function wiggleSortBrute (nums) {
  // Step 1: Sort
  nums.sort((a, b) => a - b)

  const n = nums.length
  const mid = Math.ceil(n / 2)

  // Step 2 & 3: Split and reverse
  const left = nums.slice(0, mid).reverse() // valleys
  const right = nums.slice(mid).reverse() // peaks

  // Step 4: Interleave
  let idx = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      nums[i] = left[idx]
    } else {
      nums[i] = right[idx]
      idx++
    }
  }
}

/**
🧠 Optimized Greedy Idea:
Traverse from left to right and fix the wiggle condition locally.

Rule:
- Odd index → nums[i] must be greater than nums[i - 1]
- Even index → nums[i] must be smaller than nums[i - 1]

If the rule is violated, swap the two elements.

Pattern Used: Greedy (Local Invariant Maintenance)
Time Complexity: O(n)
Space Complexity: O(1)
*/

function wiggleSort (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (
      (i % 2 === 1 && nums[i] < nums[i - 1]) || // odd index → peak
      (i % 2 === 0 && nums[i] > nums[i - 1]) // even index → valley
    ) {
      // swap
      [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    }
  }
}

const nums1 = [3, 5, 2, 1, 6, 4]
wiggleSortBrute(nums1)
console.log(nums1) // e.g. [3, 6, 2, 5, 1, 4]

const nums2 = [1, 1, 1, 2, 2]
wiggleSort(nums2)
console.log(nums2) // e.g. [3, 5, 1, 6, 2, 4]
