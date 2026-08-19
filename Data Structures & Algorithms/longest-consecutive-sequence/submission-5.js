class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        set.add([...nums]);
        console.log(set)
    }
}
