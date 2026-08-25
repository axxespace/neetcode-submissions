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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let current = head;
        let res: ListNode;
        while(current.next) {
            if(!res) {
                res = current;
                res.next = null;
            }
            else {
                const next = res;
                res = current;
                res.next = next;
            }
            current = current.next;
        }
        return res
    }
}
