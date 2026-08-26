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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let groupPrev: ListNode = dummy;

    while (true) {
      // 1. Find the k-th node from the current groupPrev
      const kth = this.getKth(groupPrev, k);
      if (!kth) break;
      const groupNext = kth.next;

      // 2. Reverse the k nodes
      let prev: ListNode | null = kth.next;
      let curr: ListNode | null = groupPrev.next;
      
      while (curr !== groupNext && curr !== null) {
        const nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
      }

      // 3. Connect the reversed group with the rest of the list
      const tmp = groupPrev.next;
      groupPrev.next = kth;
      groupPrev = tmp!;
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
