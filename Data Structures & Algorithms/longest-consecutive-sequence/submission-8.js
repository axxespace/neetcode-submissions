class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        console.log(set)
        const sortedArr = [...set].sort((a,b) => a - b)
        console.log(sortedArr)
    }
}
