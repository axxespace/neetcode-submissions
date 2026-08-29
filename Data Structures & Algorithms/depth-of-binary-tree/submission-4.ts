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
    maxLength = 0;

    maxDepth(root: TreeNode | null): number {
        let currentMaxLength = 0;
        if(root) this.maxLengthCalculator(1, root);
        return this.maxLength;
    }

    private maxLengthCalculator(currentMaxLength: number, tree: TreeNode): void {
        if (currentMaxLength > this.maxLength) {
            this.maxLength = currentMaxLength;
        }
        if(tree.left) {
            this.maxLengthCalculator(currentMaxLength + 1, tree.left)
        }
        if(tree.right) {
            this.maxLengthCalculator(currentMaxLength + 1, tree.right)
        }
    }
}
