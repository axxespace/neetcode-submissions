class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;

        let sum = 0;
        let maxHeight = 0;

        while (right > left) {
            const leftHeight = height[left];
            const rightHeight = height[right];

            const currentMaxHeight = Math.min(leftHeight, rightHeight);

            const aa = maxHeight - leftHeight < 0 ? 0 : maxHeight - leftHeight;

            const bb = maxHeight - rightHeight < 0 ? 0 : maxHeight - rightHeight;
            
            sum += aa + bb;

            if(currentMaxHeight > maxHeight) {
                maxHeight = currentMaxHeight;
            }

            if(leftHeight < rightHeight) {
                left ++;
            }
            else {
                right --;
                }

        }

        return sum;
    }
}
