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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create a dummy node to gracefully handle edge cases (like removing the head)
    const dummy = new ListNode(0, head);
    
    let fast: ListNode | null = dummy;
    let slow: ListNode | null = dummy;

    // Advance fast pointer n + 1 steps ahead
    for (let i = 0; i <= n; i++) {
        // We use the non-null assertion (!) because problem constraints 
        // guarantee n is always valid for the list length.
        fast = fast!.next; 
    }

    // Move both pointers until fast reaches the end of the list
    while (fast !== null) {
        fast = fast.next;
        slow = slow!.next;
    }

    // slow is now just before the target node, so we bypass it
    slow!.next = slow!.next!.next;

    return dummy.next;
}
}
