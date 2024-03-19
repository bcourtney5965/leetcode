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
function hasCycle(head) {
    var _a;
    if (!head || !head.next || !head.next.next)
        return false;
    var _b = [head.next, head.next.next], slow = _b[0], fast = _b[1];
    while (slow && fast) {
        if (slow == fast)
            return true;
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        fast = (_a = fast === null || fast === void 0 ? void 0 : fast.next) === null || _a === void 0 ? void 0 : _a.next;
    }
    return false;
}
