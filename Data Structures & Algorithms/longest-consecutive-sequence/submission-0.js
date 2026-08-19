class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedNums = nums.sort((a, b) => b-a)
        console.log(sortedNums);
    }
}
