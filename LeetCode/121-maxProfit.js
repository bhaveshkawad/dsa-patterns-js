/**
📘 Problem Statement:
You are given an array `prices` where `prices[i]` represents the price
of a stock on the i-th day.

You are allowed to complete at most one transaction
(i.e., buy one stock and sell one stock).

Return the maximum profit you can achieve.
If no profit is possible, return 0.

📘 Input:
const prices = [7, 1, 5, 3, 6, 4];

📘 Output:
5

🧠 Explanation:
We use a Greedy approach with a single traversal.
- Keep track of the minimum price seen so far.
- At each day, calculate the profit if we sell on that day.
- Update the maximum profit accordingly.

Pattern Used: Greedy / Single Pass Array Traversal
*/

function maxProfit (prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (const price of prices) {
    // Update minimum buying price
    if (price < minPrice) {
      minPrice = price
    } else {
      // Calculate profit if sold today
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }

  return maxProfit
}

// ✅ Test Examples
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])) // Output: 0
