class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length; //smaller or equal arr
        const n = nums2.length; //larger or equal arr
        let low = 0;
        let high = m;
        const totalLeft = Math.floor((m + n + 1) / 2);

        while (low <= high) {
            const i = Math.floor((low + high) / 2);
            const j = totalLeft - i;

            // Boundary conditions using infinity
            const maxLeft1 = i > 0 ? nums1[i - 1] : -Infinity;
            const minRight1 = i < m ? nums1[i] : Infinity;

            const maxLeft2 = j > 0 ? nums2[j - 1] : -Infinity;
            const minRight2 = j < n ? nums2[j] : Infinity;

            // Check valid partition
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 === 1) {
                    return Math.max(maxLeft1, maxLeft2);
                }
                return (
                    (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
                );
            } else if (maxLeft1 > minRight2) {
                high = i - 1; // Move search window left
            } else {
                low = i + 1;  // Move search window right
            }
        }

        throw new Error("Input arrays are not sorted or invalid.");
    }
}
