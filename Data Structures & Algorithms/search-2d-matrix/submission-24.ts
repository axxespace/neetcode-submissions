class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const matrixRowLength = matrix[0].length - 1
        let left = 0;
        let right = matrixRowLength;
        const arr = [];
        while (left < right) {
            const midIndex = Math.round((right - left)/2);
            if(target <= matrix[midIndex][matrixRowLength] && target >= matrix[midIndex][0]) {
                arr.push(...matrix[midIndex])
                left = midIndex;
                right = midIndex;
            }
            else if(target < matrix[midIndex][0]) {
                right = midIndex - 1;
            }
            else {
                left = midIndex + 1;
            }
        }
        left = 0;
        right = arr.length - 1;
        console.log(arr)
        while (left < right) {
            const mid = Math.floor((right - left) / 2);
            if (target === arr[mid]){
                return true
            }
            if(target > arr[mid]) {
                left = mid + 1
            }
            if(target < arr[mid]) {
                right = mid - 1
            }
        }
        
        return false;
    }
}
