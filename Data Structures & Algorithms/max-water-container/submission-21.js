class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxSum = 0;
        let left = 0;
        let right = heights.length - 1;
        while (right > left) {
            const sum = (right-left)*Math.min(heights[left], heights[right]);
            maxSum = sum > maxSum ? sum : maxSum;
            if(heights[left] < heights[right]) left++;
            else right--;
        }
        return maxSum
    }

}
