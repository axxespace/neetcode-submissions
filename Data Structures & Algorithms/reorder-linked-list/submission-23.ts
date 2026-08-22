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

        // Step 1: Find the middle of the linked list
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 'slow' is now at the middle. Split the list into two halves:
        let second = slow.next;
        slow.next = null; // Cuts off the first half from the second half

        // Step 2: Reverse the second half
        let prev = null;
        let curr = second;
        while (curr !== null) {
            let nextTemp = curr.next; // Store the next node
            curr.next = prev;         // Reverse the arrow
            prev = curr;              // Move prev forward
            curr = nextTemp;          // Move curr forward
        }
        // 'prev' is now the new head of the reversed second half

        // Step 3: Merge (zip) the two halves together
        let firstHalf = head;
        let secondHalf = prev;

        while (secondHalf !== null) {
            // Save the next pointers before changing them
            let temp1 = firstHalf.next;
            let temp2 = secondHalf.next;

            // Interweave the nodes
            firstHalf.next = secondHalf; // Point first to second
            secondHalf.next = temp1;     // Point second to the next of first

            // Advance both pointers
            firstHalf = temp1;
            secondHalf = temp2;
        }
    }
}
