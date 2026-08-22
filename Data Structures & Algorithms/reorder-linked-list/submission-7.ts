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
     * @return {void}
     */
        reorderList(head) {
        if (!head || !head.next) return;

        const nodes = [];
        let current = head;
        while (current !== null) {
            nodes.push(current);
            current = current.next;
        }

        let left = 0;
        let right = nodes.length - 1;

        while (left < right) {
            nodes[left].next = nodes[right];
            left++;
            
            if (left === right) break;
            
            nodes[right].next = nodes[left]; // Point right to the next left
            right--;
        }
        nodes[left].next = null;
    }

}
