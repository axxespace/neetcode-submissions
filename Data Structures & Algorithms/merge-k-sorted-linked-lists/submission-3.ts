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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode | null {
        if (!lists || lists.length === 0) return null;

        // Helper function to merge two sorted lists
        function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
            const dummy = new ListNode(0);
            let current = dummy;

            while (l1 !== null && l2 !== null) {
                if (l1.val < l2.val) {
                    current.next = l1;
                    l1 = l1.next;
                } else {
                    current.next = l2;
                    l2 = l2.next;
                }
                current = current.next;
            }

            current.next = l1 !== null ? l1 : l2;
            return dummy.next;
        }

        // Iteratively merge lists in pairs using an interval doubling approach
        let interval = 1;
        while (interval < lists.length) {
            for (let i = 0; i < lists.length - interval; i += interval * 2) {
                lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
            }
            interval *= 2;
        }

        return lists[0] || null;
    }
}
