class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if(i < nums.length - 1) sum -= i + 1;
            sum += nums[i];
        }
        return sum;
    }
}
