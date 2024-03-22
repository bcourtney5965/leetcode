class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let previous: ListNode | null = null;
  let temp: ListNode | null = null;
  while (head !== null) {
    temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
  return previous;
}
