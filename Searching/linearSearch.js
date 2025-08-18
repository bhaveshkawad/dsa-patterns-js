/*
✅ Problem Statement:
Given an array of integers `arr` and an integer `target`, return the index of `target` if it exists in the array. 
If the element does not exist, return -1.

✅ Input:
arr = [4, 2, 7, 3], target = 7

✅ Output:
2   // because arr[2] = 7

✅ Logic Explanation:
We scan the array from left to right.
For each element, check if it equals the target.
- If yes, return its index immediately.
- If no, continue checking.
If we reach the end without finding the target, return -1.

✅ Pattern Used:
Brute Force / Linear Search

✅ Time & Space Complexity:
Time: O(n)  - In the worst case, we scan the entire array.
Space: O(1) - No extra space used.
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const arr = [4, 2, 7, 3];
const target = 7;
console.log(linearSearch(arr, target)); // Output: 2
