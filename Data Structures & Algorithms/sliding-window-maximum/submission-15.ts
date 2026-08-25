class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let left = 0;
        let right = 0;
        let curr: number[] = []
        const arr: number[] = []
        while(right < nums.length) {
            curr.push(nums[right])
        
            if(right - left + 1 === k) {
                arr.push(Math.max(...curr));
                curr = [];
                left ++;
            }
            right ++;
        }
        return arr;
    }

}
