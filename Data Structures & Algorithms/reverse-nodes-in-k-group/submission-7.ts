class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // 1. Check if there are at least k nodes left
    let curr = head;
    let count = 0;
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }
    
    // If there are fewer than k nodes, leave them as they are
    if (count < k) return head;

    // 2. Reverse the first k nodes (classic linked list reversal)
    let prev: ListNode | null = null;
    curr = head;
    for (let i = 0; i < k; i++) {
        const nextNode = curr!.next;
        curr!.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // 3. 'head' is now the tail of the reversed group. 
    // Point it to the result of reversing the rest of the list.
    head!.next = this.reverseKGroup(curr, k);

    // 4. 'prev' is the new head of this group
    return prev;
}
}
