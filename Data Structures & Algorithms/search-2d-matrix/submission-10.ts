class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const matrixRowLength = matrix[0].length
        let left = 0;
        let right = matrix.length - 1;
        const arr = [];
        while (left < right) {
            const midIndex = Math.round((right - left)/2);
            if(target <= matrix[midIndex][matrixRowLength] && target >= matrix[midIndex][0]) {
                arr.push(...matrix[midIndex])
                left = midIndex;
                right = midIndex
            }
            else if(target < matrix[midIndex][0]) {
                right = midIndex - 1;
            }
            else {
                left = midIndex + 1;
            }
        }
        console.log('aaa')
        return false;
    }
}
