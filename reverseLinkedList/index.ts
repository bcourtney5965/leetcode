class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// ITERATIVE SOLUTION
// function reverseList(head: ListNode | null): ListNode | null {
//   let previous: ListNode | null = null;
//   let temp: ListNode | null = null;
//   while (head !== null) {
//     temp = head.next;
//     head.next = previous;
//     previous = head;
//     head = temp;
//   }
//   return previous;
// }

// RECURSIVE SOLUTION
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  if (!head.next) {
    return head;
  } else {
    let res = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return res;
  }
}
