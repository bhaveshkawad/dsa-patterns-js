/*
✅ Problem Statement:
Given a **sorted** array of integers `arr` and an integer `target`, return the index of `target` if it exists.
If the element does not exist, return -1.

✅ Input:
arr = [1, 3, 5, 7, 9, 11], target = 7

✅ Output:
3   // because arr[3] = 7

✅ Logic Explanation:
We use the divide & conquer approach:
1. Set two pointers: `low = 0`, `high = arr.length - 1`.
2. While low <= high:
   - Find `mid = low + Math.floor((high - low) / 2)`.
   - If arr[mid] == target → return mid.
   - If arr[mid] < target → search the right half (low = mid + 1).
   - If arr[mid] > target → search the left half (high = mid - 1).
3. If target not found, return -1.

✅ Pattern Used:
Binary Search (Divide & Conquer)

✅ Time & Space Complexity:
Time: O(log n) - Array is halved each iteration.
Space: O(1) - Iterative implementation uses constant space.
*/
{
  function binarySearch (arr, target) {
    let low = 0; let high = arr.length - 1

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)

      if (arr[mid] === target) {
        return mid
      } else if (arr[mid] < target) {
        low = mid + 1 // search right
      } else {
        high = mid - 1 // search left
      }
    }
    return -1 // not found
  }

  // Example usage:
  const arr = [1, 3, 5, 7, 9, 11]
  const target = 7
  console.log(binarySearch(arr, target)) // Output: 3
}

/*
✅ Problem Statement:
Given a **sorted** array `arr` (may contain duplicates) and an integer `target`,
return the index of the **first occurrence** of `target`.
If the target does not exist, return -1.

✅ Input:
arr = [1, 3, 3, 3, 9], target = 3

✅ Output:
1   // because the first occurrence of 3 is at index 1

✅ Logic Explanation:
We use binary search but with a twist:
1. If arr[mid] == target → record `mid` as a potential answer and
   keep searching **left** (high = mid - 1) to find earlier occurrence.
2. If arr[mid] < target → move right (low = mid + 1).
3. If arr[mid] > target → move left (high = mid - 1).
After loop ends, `ans` will hold the index of the first occurrence.

✅ Pattern Used:
Binary Search Variant (Lower Bound)

✅ Time & Space Complexity:
Time: O(log n) - Each iteration halves the array.
Space: O(1)    - Constant extra space.
*/
{
  function firstOccurrence (arr, target) {
    let low = 0; let high = arr.length - 1
    let ans = -1 // to store first occurrence

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)

      if (arr[mid] === target) {
        ans = mid // record this index
        high = mid - 1 // keep searching left
      } else if (arr[mid] < target) {
        low = mid + 1 // search right
      } else {
        high = mid - 1 // search left
      }
    }
    return ans
  }

  // Example usage:
  const arr = [1, 3, 3, 3, 9]
  const target = 3
  console.log(firstOccurrence(arr, target)) // Output: 1
}

/*
✅ Problem Statement:
Given a **sorted** array `arr` (may contain duplicates) and an integer `target`,
return the index of the **last occurrence** of `target`.
If the target does not exist, return -1.

✅ Input:
arr = [1, 3, 3, 3, 9], target = 3

✅ Output:
3   // because the last occurrence of 3 is at index 3

✅ Logic Explanation:
We modify binary search slightly:
1. If arr[mid] == target → record `mid` as potential answer
   and keep searching **right** (`low = mid + 1`) for a later occurrence.
2. If arr[mid] < target → search right (`low = mid + 1`).
3. If arr[mid] > target → search left (`high = mid - 1`).
At the end, `ans` will contain the index of the last occurrence.

✅ Pattern Used:
Binary Search Variant (Upper Bound)

✅ Time & Space Complexity:
Time: O(log n) - Halves search space each time.
Space: O(1)    - Constant extra space.
*/
{
  function lastOccurrence (arr, target) {
    let low = 0; let high = arr.length - 1
    let ans = -1 // store last occurrence

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)

      if (arr[mid] === target) {
        ans = mid // record potential answer
        low = mid + 1 // keep searching right
      } else if (arr[mid] < target) {
        low = mid + 1 // go right
      } else {
        high = mid - 1 // go left
      }
    }
    return ans
  }

  // Example usage:
  const arr = [1, 3, 3, 3, 9]
  const target = 3
  console.log(lastOccurrence(arr, target)) // Output: 3
}
