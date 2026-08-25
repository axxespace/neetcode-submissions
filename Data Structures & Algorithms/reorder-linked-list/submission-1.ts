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
            arr.push(current.val);
            current = current.next;
            if(current.next === null) {
                const dummy = ListNode(0);
                let curr = dummy;
                let left = 0;
                let right = arr.length - 1;
                while(left <= right) {
                    if(left === right) {
                        curr.next = arr[left];
                        curr = curr.next;
                    }
                    else {
                        curr.next = arr[left];
                        curr = curr.next;
                        curr.next = arr[right];
                        curr = curr.next;
                    }
                    left ++;
                    right --;
                }
                return dummy.next;
            }
        }
    }
}
