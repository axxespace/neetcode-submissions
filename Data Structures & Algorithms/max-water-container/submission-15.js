class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const length = heights.length;
        let maxSum = 36;
        console.log('kle', maxSum);
        for (let i = 0; i < length; i++){            
            for (let k = length - 1; k > i; k --) {
                if(heights[k] >= heights[i]) {
                    const sum = (k - i) * heights[i];
                    if (maxSum < sum) maxSum = sum;
                    return;
                }
            }
        }
    }
}
