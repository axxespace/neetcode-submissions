class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const map = new Map();
        let left = 0;
        let right = height.length - 1;
        while (right > left) {
            if(left === 0) {
                left ++;
                break;
            }

            if(right === 0) {
                right --;
                break;
            }

            const leftHeight = height[left];
            const rightHeight = height[right];

            const minHeight = Math.min(leftHeight, rightHeight);

            if(!map.get(minHeight)) {
                map.set(minHeight, [left, right])
            }

            if(leftHeight < rightHeight) left ++;
            else right --;
        }
        console.log(map)
    }
}
