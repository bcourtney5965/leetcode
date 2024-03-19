/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// type ListNode =
//   | null
//   | undefined
//   | {
//       val: number;
//       next: ListNode | null | undefined;
//     };

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next || !head.next.next) return false;
  let [slow, fast] = [head.next, head.next.next];
  while (slow && fast) {
    if (slow == fast) return true;
    slow = slow?.next;
    fast = fast?.next?.next;
  }

  return false;
}
