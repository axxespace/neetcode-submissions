class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = [];
        for (let i = 0; i < nums.length; i++) { 
            let right = nums.length - 1;
            while (right >= i + 2) {
                for (let k = right - 1; k > i; k--) {
                    if(nums[i] + nums[right] + nums[k] === 0) {
                        console.log
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
