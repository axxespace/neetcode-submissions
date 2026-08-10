class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        if (!matrix.length || !matrix[0].length) return false;

        const matrixRowLength = matrix[0].length - 1;
        let left = 0;
        let right = matrix.length - 1; // Fixed: was using matrixRowLength instead of last row index
        const arr: number[] = [];

        // Step 1: Find row
        while (left <= right) { // Fixed: changed '<' to '<=' to handle single-row matrices
            const midIndex = Math.floor(left + (right - left) / 2); // Fixed: relative offset & round -> floor
            
            if (target <= matrix[midIndex][matrixRowLength] && target >= matrix[midIndex][0]) {
                arr.push(...matrix[midIndex]);
                break; // Fixed: clean exit once row is found
            } else if (target < matrix[midIndex][0]) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }
        }

        // Step 2: Binary search on extracted array
        left = 0;
        right = arr.length - 1;

        while (left <= right) { // Fixed: changed '<' to '<=' to check all elements properly
            const mid = Math.floor(left + (right - left) / 2); // Fixed: relative offset & round -> floor
            
            if (target === arr[mid]) {
                return true;
            }
            if (target > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
