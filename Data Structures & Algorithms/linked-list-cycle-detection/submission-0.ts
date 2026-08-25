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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let current = head;
        const arr = []
        while (current !== null) {
            if (arr.includes(current.next)) {
                return true
            }
            arr.push(current.val);
            current = current.next;
        }
        return false;
    }
}
