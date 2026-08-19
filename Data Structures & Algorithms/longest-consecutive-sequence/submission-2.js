class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        set.add(...nums);
        const sortedNums = [...set].sort((a, b) => a - b);
    }
}
