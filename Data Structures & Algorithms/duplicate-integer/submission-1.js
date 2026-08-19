class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const prevVar = [];
        for(let i = 0; i < nums.length; i++) {
            if(prevVar.length) {
                for (let k = 0; k < prevVar.length; k++) {
                   if (nums[i] === prevVar[k]) return true;
                }
            }
            prevVar[prevVar.length - 1] = nums[i];
        }
        return false;
    }
}
