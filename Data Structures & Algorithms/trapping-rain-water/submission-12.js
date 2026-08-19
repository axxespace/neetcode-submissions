class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const arr = new Array({length: height.length});
        console.log(arr)
        // let left = 0;
        // let right = height.length - 1;

        // while (right > left) {
        //     if(height[left] === 0) {
        //         left ++;
        //         continue;
        //     }

        //     if(height[right] === 0) {
        //         right --;
        //         continue;
        //     }

        //     const leftHeight = height[left];
        //     const rightHeight = height[right];

        //     const minHeight = Math.min(leftHeight, rightHeight);

        //     if(!map.get(minHeight)) {
        //         map.set(minHeight, [left, right])
        //     }

        //     if(leftHeight < rightHeight) left ++;
        //     else right --;
        // }
        // for (const [i, val] of map) {
        //     console.log(i, val)
        // }
    }
}
