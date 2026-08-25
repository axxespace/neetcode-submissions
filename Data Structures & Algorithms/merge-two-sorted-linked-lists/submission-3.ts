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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let current1 = list1;
        let current2 = list2;
        const dummy = new ListNode(0);
        let current = dummy;
        while (current1 !== null || current2 !== null) {
            const val1 = current1.val;
            const val2 = current2.val;
            if(val1 <= val2) {
                current.next = new ListNode(val1);
                if(current1.next) {
                    current1 = current1.next;
                }
            }
            else {
                current.next = new ListNode(val2);
                if(current2.next) {
                    current2 = current1.next;
                }
            }
            current = current.next;
        }
    }
}
