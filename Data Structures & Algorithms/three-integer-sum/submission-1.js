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
                    if(nums[i] + nums[right] + nums[k] === 0) arr.push(nums[i], nums[right], nums[k])
                }
                right --;
            }
        }
        console.log(arr);
    }
}
