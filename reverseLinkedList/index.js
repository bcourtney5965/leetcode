var ListNode = /** @class */ (function () {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  return ListNode;
})();
function reverseList(head) {
  var previous = null;
  var temp = null;
  while (head !== null) {
    temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
  return previous;
}
