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
                  right = mid
                }
            }
            if(target > nums[mid]) {
                if(nums[mid] > nums[right]) {
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
