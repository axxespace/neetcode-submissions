class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            const mid = left + Math.floor((right - left)/2);
            console.log(mid, left, right)
            if(nums[mid] > nums[right]) {
                left = mid
            }
            else {
                right = mid
            }

            if(right === left) return right
        }

    }
}
