/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let maxDiameter = 0;

        function calculateDepth(node: TreeNode | null): number {
            if (!node) return 0;

            const leftDepth = calculateDepth(node.left);
            const rightDepth = calculateDepth(node.right);

            // Update maxDiameter if the path passing through the current node is greater
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            // Return height of the current subtree
            return 1 + Math.max(leftDepth, rightDepth);
        }

        calculateDepth(root);
        return maxDiameter;
    }
}
