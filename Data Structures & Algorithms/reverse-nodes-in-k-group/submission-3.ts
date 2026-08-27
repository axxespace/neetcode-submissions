class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        if (!head || k === 1) return head;

        const dummy = new ListNode(0, head);
        let groupPrev: ListNode | null = dummy;

        while (true) {
            const kth = this.getKth(groupPrev, k);
            if (!kth) break;

            const groupNext = kth.next;

            let prev = groupNext;
            let curr = groupPrev.next;
            
            while (curr !== groupNext) {
                const temp = curr!.next;
                curr!.next = prev;
                prev = curr;
                curr = temp;
            }

            const tmp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = tmp;
        }

        return dummy.next;
    }

    private getKth(curr: ListNode | null, k: number): ListNode | null {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
