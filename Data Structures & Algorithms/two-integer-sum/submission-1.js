class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const [index, num] of nums.entries()) {
            let i = index + 1;
            while (i < nums.length) {
                if(nums[i] + num === target)
                {
                    return [index, i];
                }
                i++;
            }
        }
    }
}
