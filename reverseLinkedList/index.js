var ListNode = /** @class */ (function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  return ListNode;
})();
function reverseList(head) {
  // set temp variable to ListNode | null
  var temp = null;
  var next = null;
  var current = head;
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
