/*
✅ Problem Statement:
Given the `head` of a singly linked list that contains a **cycle**, return the **node where the cycle begins**.

If there is no cycle, return `null`.

You must solve it using **O(1)** space (no extra Set or array) and **O(n)** time.

✅ Input:
A linked list:
3 → 2 → 0 → -4 → (points back to node 2)

✅ Output:
Node with value 2 (start of cycle)

✅ Logic Explanation:
1. First, use the Fast & Slow Pointer method to **detect if a cycle exists**.
2. Once fast and slow **meet inside the cycle**, reset one pointer back to the `head`:
   - Keep the other at the meeting point
3. Move **both pointers one step at a time**.
4. The node where they meet again is the **start of the cycle**.

🧠 Why this works:
Let’s say:
- `m` = length from head to start of cycle
- `k` = length of cycle
- When fast and slow meet, they are `d` steps into the cycle
- Then if you restart one pointer from head, and the other from meeting point,
  they both take `m` steps to reach the **start of the cycle**.

✅ Pattern Used:
Fast & Slow Pointers (Cycle detection + entry point discovery)

✅ Language Used:
JavaScript

✅ Time & Space Complexity:
Time: O(n) – One pass to detect + one pass to find start
Space: O(1) – No extra space used
*/

// 1 → 2 → 3 → 4 → 5 → 6 (points back to 3)

function detectCycle (head) {
  let slow = head
  let fast = head

  // Step 1: Detect cycle using fast & slow pointers
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      // Step 2: Found meeting point – now find start of cycle
      let entry = head

      while (entry !== slow) {
        entry = entry.next
        slow = slow.next
      }

      return entry // ✅ Start of the cycle
    }
  }

  return null // No cycle
}

// ✅ Test Example

class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// 1 → 2 → 3 → 4 → 5 → 6 (points back to 3)
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node3

const startNode = detectCycle(node1)
console.log('Start of cycle is at node with value:', startNode?.val) // Output: 2
