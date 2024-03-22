class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // set temp variable to ListNode | null
  let temp: ListNode | null = null;
  let next: ListNode | null = null;
  let current: ListNode | null = head;
  // create a loop // while temp is NOT NULL
  while (current !== null) {
    //    set temp to current.next
    temp = current.next;
    //    point current.next to next
    current.next = next;
    //    set next to current
    next = current;
    //    set current to temp
    current = temp;
  }
  return next;
}
