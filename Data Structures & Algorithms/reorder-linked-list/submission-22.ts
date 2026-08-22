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
    reorderList(head: ListNode | null): void {
        let current = head;
        const arr = [];
        while (current !== null) {
            arr.push(current);
            current = current.next;
        }
        let left = 0;
        let right = arr.length - 1;
        while(left < right) {
            arr[left].next = arr[right];
            left ++;
            arr[right].next = arr[left];
            right --;
        }
        arr[left].next = null;
    
    }
}
