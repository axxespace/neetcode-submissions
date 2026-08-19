class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let prevVar;
        for(let i = 0; i < nums.length; i++) {
            if (prevVar === nums[i])
            return true;
            prevVar = nums[i];
        }
        return false;
    }
}
