/*
✅ Problem Statement:
Given an integer `n`, determine whether it is a **power of two**.
A number is a power of two if it can be expressed as `2^k` for some integer `k`.

✅ Input:
n = 16

✅ Output:
true   // 16 = 2^4

✅ Input:
n = 18

✅ Output:
false

--------------------------------------------------

✅ Logic Explanation:

We can solve this problem in **two valid ways**.

---------------------------------
🔹 Approach 1: Math-Based (Division)
---------------------------------
1. If `n <= 0`, it cannot be a power of two.
2. Repeatedly divide `n` by 2 while it is even.
3. If the final value becomes exactly `1`, then it is a power of two.
4. Otherwise, it is not.

---------------------------------
🔹 Approach 2: Bitwise (Optimized)
---------------------------------
1. A power of two has **only one set bit (1)** in its binary representation.
2. Subtracting 1 from such a number flips all bits after that set bit.
3. Doing `n & (n - 1)` removes the last set bit.
4. If the result is `0`, the number is a power of two.
5. Ensure `n > 0` to handle edge cases.

---------------------------------

✅ Pattern Used:
Math / Bit Manipulation

✅ Time & Space Complexity:
Math Approach:
- Time: O(log n)
- Space: O(1)

Bitwise Approach:
- Time: O(1)
- Space: O(1)
*/

{
  // 🔹 Math-based approach
  function isPowerOfTwoMath (n) {
    if (n <= 0) return false

    while (n % 2 === 0) {
      n = n / 2
    }
    return n === 1
  }

  // 🔹 Bitwise approach (preferred)
  function isPowerOfTwoBitwise (n) {
    return n > 0 && (n & (n - 1)) === 0
  }

  // Example usage:
  console.log(isPowerOfTwoMath(16)) // true
  console.log(isPowerOfTwoMath(18)) // false

  console.log(isPowerOfTwoBitwise(16)) // true
  console.log(isPowerOfTwoBitwise(18)) // false
}
