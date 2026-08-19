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

        let prevLeft = 0;

        let prevRight = 0;

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
                const prevMinHeight = minHeight;
                minHeight = currentMinHeight;
                let aa = 0;
                let bb = 0;
                if (left > prevLeft)
                aa = leftHeight > prevMinHeight ? prevMinHeight : leftHeight;
        
                if(right < prevRight)
                bb = rightHeight > prevMinHeight ? prevMinHeight : rightHeight;

                sum -= aa + bb;
            }

            console.log(right, left, minHeight, sum)
            if(leftHeight < rightHeight) {
                prevLeft = left;
                left ++;
            }
            else {
                prevRight = right;

                right --;
                }

        }

        // return sum
    }
}
