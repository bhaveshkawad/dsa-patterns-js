/*
✅ Problem Statement:
Given an array `nums` containing only values `0`, `1`, and `2`,
sort the array **in-place** so that:
- All `0`s come first
- Then all `1`s
- Then all `2`s

You must solve this without using any built-in sort function.

✅ Input:
nums = [2, 0, 2, 1, 1, 0]

✅ Output:
[0, 0, 1, 1, 2, 2]

✅ Logic Explanation:
This problem is solved using the **Dutch National Flag Algorithm**.

We divide the array into four regions using three pointers:
1. `low`   → boundary for 0s
2. `mid`   → current element being checked
3. `high`  → boundary for 2s

Initial setup:
low = 0
mid = 0
high = nums.length - 1

While `mid <= high`:
1️⃣ If nums[mid] == 0:
   - Swap nums[mid] with nums[low]
   - Increment both low and mid

2️⃣ If nums[mid] == 1:
   - Element is already in correct place
   - Increment mid only

3️⃣ If nums[mid] == 2:
   - Swap nums[mid] with nums[high]
   - Decrement high
   - Do NOT increment mid (new value must be checked)

This guarantees sorting in a single pass.

✅ Pattern Used:
Dutch National Flag (Three Pointers / Partitioning)

✅ Time & Space Complexity:
Time: O(n)  - Single traversal of the array
Space: O(1) - In-place sorting, no extra space
*/

{
  function sortColors (nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]]
        low++
        mid++
      } else if (nums[mid] === 1) {
        mid++
      } else { // nums[mid] === 2
        [nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--
      }
    }
  }

  // Example usage:
  const nums = [2, 0, 2, 1, 1, 0]
  sortColors(nums)
  console.log(nums) // Output: [0, 0, 1, 1, 2, 2]
}
