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

            if(leftHeight === 0) {
                left ++;
                continue;
            }

            if(rightHeight === 0) {
                right --;
                continue;
            }

            if (maxHeight) {
                sum -= rightHeight > maxHeight ? maxHeight : rightHeight;
                sum -= leftHeight > maxHeight ? maxHeight : leftHeight;
            }

            const minHeight = Math.min(leftHeight, rightHeight);
            
            sum += minHeight * (right - left);

            if(leftHeight < rightHeight) left ++;
            else right --;
        }

        return sum
    }
}
