/*
✅ Problem Statement:
You are given an array of daily temperatures. For each day, return how many days you would have to wait until a warmer temperature.
If there is no future day for which this is possible, put 0 instead.

✅ Input:
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

✅ Output:
[1, 1, 4, 2, 1, 1, 0, 0]

✅ Logic Explanation:
We use a monotonic decreasing stack to store indices of days in descending order of temperature.
As we iterate:
- If the current temperature is greater than the one at the top of the stack:
  → That means we've found a "warmer day" for the day at the top.
  → Pop from the stack, calculate the number of days waited.
- Push current index into the stack.
- Repeat until the end of the array.
Days remaining in the stack never find a warmer future day → stay 0.

✅ Pattern Used:
Monotonic Stack (Decreasing by temperature)

✅ Time & Space Complexity:
Time: O(n) - Each index is pushed and popped once
Space: O(n) - Stack for indices, result array
*/

function dailyTemperatures (temperatures) {
  const stack = [] // Will store indices
  const result = Array(temperatures.length).fill(0)

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()
      result[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }

  return result
}

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures)) // Output: [1, 1, 4, 2, 1, 1, 0, 0]
