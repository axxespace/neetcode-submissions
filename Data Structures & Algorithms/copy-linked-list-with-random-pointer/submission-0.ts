// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node | null {
        if (!head) return null;

        const map = new Map<Node, Node>();

        // Pass 1: Create all cloned nodes and map original -> copy
        let curr: Node | null = head;
        while (curr !== null) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Pass 2: Assign next and random pointers using the map
        curr = head;
        while (curr !== null) {
            const copy = map.get(curr)!;
            copy.next = curr.next ? map.get(curr.next)! : null;
            copy.random = curr.random ? map.get(curr.random)! : null;
            curr = curr.next;
        }

        return map.get(head)!;
    }
}
