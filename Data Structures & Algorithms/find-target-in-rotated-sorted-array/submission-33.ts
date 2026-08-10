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
            if(right === left) {
                if(target === nums[right]) {
                    return right;
                }
                else return -1
            }
            const mid = left + Math.floor((right - left)/2);
            if(nums[mid] === target) return mid
            if(target < nums[mid]) {
                if(nums[mid] > nums[right] && target <= nums[right]) {
                  left = mid + 1
                }
                else {
                  right = mid
                }
            }
            if(target > nums[mid]) {
                if((nums[mid] < nums[right] && target <= nums[right]) || (nums[mid] > nums[right] && nums[mid] > nums[left])) {
                    left = mid + 1
                }
                else {
                    right = mid
                }
            }
        
        }
        return -1;
    }
}
