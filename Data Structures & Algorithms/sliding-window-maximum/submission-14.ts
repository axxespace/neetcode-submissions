class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let left = 0;
        let right = 0;
        let firstNum: number;
        let curr: number[] = []
        const arr: number[] = []
        while(right < nums.length) {
            if(right === left) {
                firstNum = nums[right];
            } 
                curr.push(nums[right]);
        
            if(right - left + 1 === k) {
                arr.push(Math.max(...curr, firstNum));
                curr = [];
                left ++;
            }
            right ++;
        }
        return arr;
    }

}
