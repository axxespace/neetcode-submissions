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
        while(right < nums.length) {
            map.set(nums[right], (nums[right] || 0) + 1);
            let currentMax = Math.max(...map.keys())
            if(right - left + 1 === k) {
                const leftNum = nums[left]
                const leftNumLength = map.get(leftNum);
                if(leftNumLength > 1) {
                    map.set(leftNum, leftNumLength - 1)
                }
                else {
                    map.delete(leftNum);
                }
                currentMax = Math.max(...map.keys());
                arr.push(currentMax);
                left ++;
            }
            right ++;
        }
        return arr;
    }

}
