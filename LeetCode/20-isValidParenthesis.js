/**
📘 Problem Statement:
Given a string `s` containing just the characters
'(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

A string is valid if:
1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.

📘 Input:
const s = "()[]{}";

📘 Output:
true

📘 Input:
const s = "(]";

📘 Output:
false

🧠 Explanation:
We use a stack to keep track of opening brackets.
- Push opening brackets onto the stack.
- When a closing bracket appears, check if it matches the
  top of the stack.
- If not, the string is invalid.
- At the end, the stack must be empty.

Pattern Used: Stack
*/

function isValidParenthesis (s) {
  const stack = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (const char of s) {
    // If opening bracket, push to stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      // Closing bracket with no opening
      if (stack.length === 0) return false

      const top = stack.pop()
      if (top !== map[char]) return false
    }
  }

  // Stack must be empty for a valid string
  return stack.length === 0
}

// ✅ Test Examples
console.log(isValidParenthesis('()[]{}')) // true
console.log(isValidParenthesis('(]')) // false
console.log(isValidParenthesis('([)]')) // false
console.log(isValidParenthesis('{[]}')) // true
