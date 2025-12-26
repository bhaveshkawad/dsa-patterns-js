/*
✅ Problem Statement:
Given the head of a singly linked list, determine whether the list contains a cycle.

A cycle exists if any node in the list is visited more than once during traversal — i.e., a node’s `next` points back to a previous node, forming a loop.

Your task is to return `true` if a cycle exists, otherwise return `false`.

You must do this in **O(1) space** — you **cannot use extra memory** like a Set or Map.

✅ Input:
A linked list:
3 → 2 → 0 → -4 → (points back to 2)

✅ Output:
true

✅ Logic Explanation:
We use **two pointers**:
- `slow` moves one step at a time
- `fast` moves two steps at a time

If there is a **cycle**, the fast pointer will eventually catch up and meet the slow pointer inside the cycle.
If no cycle exists, the fast pointer will reach `null`, and the pointers will never meet.

This works because in a cycle, the fast pointer "laps" the slow one like runners on a circular track.

✅ Pattern Used:
Fast & Slow Pointers (a.k.a. Floyd's Cycle Detection)

✅ Language Used:
JavaScript

✅ Time & Space Complexity:
Time: O(n) — Each pointer visits at most n nodes
Space: O(1) — Only two pointers used
*/

// 10 → 20 → 30 → 40 → 50 → 60 → 70 → 50
// slow = 10, 20, 30, 40,  50, 60, 70
// fast = 10, 30, 50, 70,  60, 50, 70

function hasCycle (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

// ✅ Test Example
class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// 10 → 20 → 30 → 40 → 50 → 60 → 70 → 50
const node1 = new ListNode(10)
const node2 = new ListNode(20)
const node3 = new ListNode(30)
const node4 = new ListNode(40)
const node5 = new ListNode(50)
const node6 = new ListNode(60)
const node7 = new ListNode(70)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node5

console.log('🚀 Starting Cycle Detection:')
console.log('Result:', hasCycle(node1)) // Output: true
