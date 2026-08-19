class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;

        let sum = 0;
        let minHeight = 0;

        let maxWidth = 0;

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

           const currentMinHeight = Math.min(leftHeight, rightHeight);
            if(currentMinHeight > minHeight) {
                sum += (currentMinHeight - minHeight) * (right - left - 1);

                maxWidth = maxWidth = 0 ? right - left - 1 : maxWidth;

                let aa = leftHeight > minHeight ? minHeight : leftHeight;
        
                let bb = rightHeight > minHeight ? minHeight : rightHeight;

                sum -= maxWidth ? aa + bb : 0;

                minHeight = currentMinHeight;

            }

            console.log(right, left, minHeight, sum)

            if(leftHeight < rightHeight) left ++;
            else right --;

        }

        // return sum
    }
}
