class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let left = 0;
        let right = 0;
        const arr: number[] = []
        while(right < nums.length) {
            if(right - left + 1 === k) {
                arr.push(Math.max(...nums.slice(left, right < nums.length ? right : nums.length)));
                left ++;
            }
            right ++;
        }
        return arr;
    }

}
