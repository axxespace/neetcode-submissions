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
        // while(current.next) {
        //     console.log(current)
        //     if(!res?.val) {
        //         res.val = current.val;
        //         res.next = null;
        //     }
        //     else {
        //         res
        //     }
        //     res = current;
        //     current = current.next;
        // }
        res = current;
        res.next = null
        console.log(res)
        return current
    }
}
