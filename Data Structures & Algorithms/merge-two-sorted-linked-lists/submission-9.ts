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
            if(current1 && current1.val <= current2.val) {
                current.next = new ListNode(current1.val);
                current1 = current1.next;
            }
            else {
                current.next = new ListNode(current2.val);
                current2 = current2.next;
            
            }
            current = current.next;
        }
        return dummy.next;
    }
}
