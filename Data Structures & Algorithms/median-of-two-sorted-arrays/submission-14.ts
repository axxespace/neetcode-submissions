class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if(nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }
        const length1 = nums1.length
        const length2 = nums2.length
        const half = Math.floor((length1 + length2 + 1) / 2);
        let min = 0;
        let max = length1;
        while(min <= max) {
            let i = Math.floor((min + max) / 2);
            let j = half - i;
const leftMax1 = (i === 0) ? -Infinity : nums1[i - 1];
const rightMin1 = (i === length1) ? Infinity : nums1[i];
const leftMax2 = (j === 0) ? -Infinity : nums2[j - 1];
const rightMin2 = (j === length2) ? Infinity : nums2[j];

            if(leftMax1 <= rightMin2 && leftMax2 <= rightMin1) {
                if((length1 + length2) % 2 === 1) {
                    return Math.max(leftMax1, leftMax2)
                }
                else return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2
            }
            if(leftMax1 > rightMin2) {
                max = i - 1
            }
            else {
                min = i + 1
            }
        }
    }
}
