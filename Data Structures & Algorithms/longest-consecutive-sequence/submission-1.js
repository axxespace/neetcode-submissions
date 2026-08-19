class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        console.log(sortedNums);
    }
}
