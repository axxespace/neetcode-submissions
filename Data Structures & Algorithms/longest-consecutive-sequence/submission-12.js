class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const sortedArr = [...set].sort((a,b) => a - b)
        
        const arrs = [];

        for (const [index, num] of sortedArr.entries()) {
            if(index !== 0 && sortedArr[index] - 
                sortedArr[index - 1] === 1) {
                    arrs[arrs.length - 1].push(num)
            }
            else {
                arrs.push([num]);
            }
        }

        return arrs.reduce((sum, arr) => arr.length > sum ? arr.length : sum, 0)
    }
}
