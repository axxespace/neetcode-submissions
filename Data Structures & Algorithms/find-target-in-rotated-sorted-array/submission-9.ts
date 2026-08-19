class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            const mid = left + Math.floor((right - left)/2);
            console.log(mid, left, right, target, nums[mid])
            if(nums[mid] === target) return mid
            if(target < nums[mid]) {
                if(nums[mid] > nums[right]) {
                  left = mid + 1
                }
                else {
                  right = mid - 1
                }
            }
            if(target > nums[mid]) {
                if(nums[mid] > nums[right]) {
                    right = mid - 1
                }
                else {
                    left = mid + 1
                }
            }
        
        }
        return -1;
    }
}
