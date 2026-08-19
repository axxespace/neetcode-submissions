class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const largestArr = nums1.length > nums2.length ? nums1 : nums2; 
        const smallestArr = nums1.length < nums2.length ? nums1 : nums2;
        let smallestArrMid: number | [number, number];
        let largestArrMid: number | [number, number];
        smallestArrMid = smallestArr.length%2 === 0 ? [smallestArr[smallestArr.length/2 - 1], smallestArr[smallestArr.length/2]] :  smallestArr[Math.floor(smallestArr.length/2)];
        largestArrMid = largestArr.length%2 === 0 ? [largestArr[largestArr.length/2 - 1], largestArr[largestArr.length/2]] :  largestArr[Math.floor(largestArr.length/2)];

        console.log(smallestArrMid)
        return 1;

    }
}
