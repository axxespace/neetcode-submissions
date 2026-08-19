class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const length = heights.length;
        let maxSum = 0;
        for (let i = 0; i < length; i++){            
            for (let k = length - 1; k > i; k --) {
                const minH = Math.min(heights[k], heights[i]);
                const sum = (k - i) * minH;
                if (maxSum < sum) maxSum = sum;
            }
        }
                console.log(maxSum);
        return maxSum;
    }
}
