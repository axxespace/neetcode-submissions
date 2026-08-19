class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = [];
        for (let i = 0; i < nums.length; i++) { 
            let right = nums.length - 1;
            while (right > i + 1) {
                for (let k = right; k > i; k--) {
                    if(nums[i] + nums[right] + nums[k] === 0) {
                        const sorted = [nums[i], nums[right], nums[k]].sort((a, b) => a - b);
                        const exists = arr.some(subArr => JSON.stringify(subArr) === JSON.stringify(sorted));

                        if(!exists) arr.push(sorted)
                    }
                }
                right --;
            }
        }
        return arr
    }
}
