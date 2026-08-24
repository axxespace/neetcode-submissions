/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummyHead = new ListNode(0);
        let current = dummyHead;
        let carry = 0;

        let p = l1;
        let q = l2;

        while (p !== null || q !== null || carry !== 0) {
            let x = (p !== null) ? p.val : 0;
            let y = (q !== null) ? q.val : 0;
            
            let sum = x + y + carry;
            carry = Math.floor(sum / 10);
            
            current.next = new ListNode(sum % 10);
            current = current.next;

            if (p !== null) p = p.next;
            if (q !== null) q = q.next;
        }

        return dummyHead.next;

    }
}
