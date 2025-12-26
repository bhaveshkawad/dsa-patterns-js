/*
✅ Problem Statement:
Given the `head` of a singly linked list, return the **middle node** of the linked list.

If the list has:
- **Odd** number of nodes → return the exact middle
- **Even** number of nodes → return the **second middle**

✅ Input:
A linked list:
1 → 2 → 3 → 4 → 5

✅ Output:
Node with value 3

Another example:
1 → 2 → 3 → 4 → 5 → 6
Output: Node with value 4 (second middle)

✅ Logic Explanation:
1. Use two pointers:
   - `slow` moves **one step**
   - `fast` moves **two steps**
2. Traverse the list until:
   - `fast` reaches the end (`null`)
3. When `fast` reaches the end, `slow` will be at the **middle** of the list.
4. Return the `slow` pointer.

🧠 Why this works:
- `fast` moves twice as fast as `slow`
- So when `fast` finishes traversing the list,
  `slow` has traversed **half** the list
- For even-length lists, `slow` naturally lands on the **second middle**

✅ Pattern Used:
Fast & Slow Pointers (Two Pointer Technique)

✅ Language Used:
JavaScript

✅ Time & Space Complexity:
Time: O(n) – Single traversal of the list
Space: O(1) – No extra space used
*/

// Example: 1 → 2 → 3 → 4 → 5

function findMiddle (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow // ✅ Middle node
}

// ✅ Test Example

class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// 1 → 2 → 3 → 4 → 5
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

const middle = findMiddle(node1)
console.log('Middle node value:', middle.val) // Output: 3
