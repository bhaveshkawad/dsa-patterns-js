/*
✅ Problem Statement:
Given a sorted integer array `nums`,
remove the duplicates in-place such that each unique element appears only once.
Return the number of unique elements.

The relative order of the elements should be kept the same.
You must do this with O(1) extra space.

✅ Input:
nums = [1, 1, 2]

✅ Output:
2
nums = [1, 2, _]

✅ Logic Explanation:
This is a Two Pointer problem using the Slow–Fast pointer technique.
1. Initialize `slow` pointer at index 0 (tracks last unique element).
2. Start `fast` pointer from index 1 to scan the array.
3. If `nums[fast]` is different from `nums[slow]`:
   - Increment `slow`
   - Copy `nums[fast]` to `nums[slow]`
4. Continue until `fast` reaches the end of the array.
5. The new length is `slow + 1`.

✅ Pattern Used:
Two Pointer (Slow & Fast)

✅ Time & Space Complexity:
Time: O(n)  - Each element is visited once.
Space: O(1) - In-place modification, no extra space.
*/

function removeDuplicates (nums) {
  if (nums.length === 0) return 0

  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
  }

  return slow + 1
}

// Example usage:
const nums = [1, 1, 2]
const k = removeDuplicates(nums)
console.log(k) // 2
console.log(nums) // [1, 2, ...]
