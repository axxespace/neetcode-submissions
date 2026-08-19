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

            let a;
            if(minHeight - maxHeight > 0) {
                a = minHeight - maxHeight;
            }
            else if(maxHeight - minHeight > 0) {
                a = maxHeight - minHeight;
            }
            else a = maxHeight;
            
            sum += (minHeight - maxHeight) * (right - left);

            if (minHeight > maxHeight) maxHeight = minHeight;

            if(leftHeight < rightHeight) left ++;
            else right --;
        }

        return sum
    }
}
