class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let output = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === target) output = i
        }
        return output;
    }
}
