class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const sortedArr = [...set].sort((a,b) => a - b)

        for ([index, num] of sortedArr.entries()) {
            console.log(index, num)
        }
    }
}
