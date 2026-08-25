class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let left = 0;
        let right = 0;
        const map = new Map();
        const arr: number[] = [];
        let currentMax: number = -Infinity;
        while(right < nums.length) {
            map.set(nums[right], (nums[right] || 0) + 1);
            currentMax = Math.max(nums[right], currentMax);
            if(right - left + 1 === k) {
                const leftNum = nums[left]
                const leftNumLength = map.get(leftNum);
                if(leftNumLength > 1) {
                    map.set(leftNum, leftNumLength - 1)
                }
                else {
                    map.delete(leftNum);
                    currentMax = map.size ? Math.max(...map.keys()) : -Infinity;
                }
                arr.push(currentMax);
                left ++;
            }
            right ++;
        }
        return arr;
    }

}
