/*
✅ Problem Statement:
Check if a singly linked list is a palindrome.

✅ Input:
10 → 20 → 30 → 20 → 10

✅ Output:
true

✅ Logic Explanation:
1. Use fast & slow pointers to find the middle node.
2. Reverse the second half of the list.
3. Compare first half and reversed second half.
4. Return true if all values match, else false.

✅ Pattern Used:
Fast & Slow Pointers + Linked List Reversal

✅ Time & Space Complexity:
Time: O(n)
Space: O(1)
*/

// ✅ Input:
// 10 → 20 → 30 → 20 → 10

function isPalindrome (head) {
  if (!head || !head.next) return true

  // Find the middle
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Reverse second half
  let prev = null
  let curr = slow
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  // Compare both halves
  let left = head
  let right = prev
  while (right) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }

  return true
}

// ✅ Node definition using class
class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const n1 = new ListNode(10)
const n2 = new ListNode(20)
const n3 = new ListNode(30)
const n4 = new ListNode(30)
const n5 = new ListNode(20)
const n6 = new ListNode(10)

// Link the nodes
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

console.log(isPalindrome(n1)) // Output: true
