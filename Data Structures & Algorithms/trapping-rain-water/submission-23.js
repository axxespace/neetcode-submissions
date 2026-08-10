class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const arr = Array.from({ length: height.length }, () => 0);
        let left = 0;
        let right = height.length - 1;

        while (right > left) {
            if(height[left] === 0) {
                left ++;
                continue;
            }

            if(height[right] === 0) {
                right --;
                continue;
            }

            if(arr[left]){
                const diff = arr[left] - height[left];
                arr[left] = diff > 0 ? diff : 0;
            }

            if(arr[right]){
                const diff = arr[right] - height[right];
                arr[right] = diff > 0 ? diff : 0;
            }

            const leftHeight = height[left];
            const rightHeight = height[right];

            const minHeight = Math.min(leftHeight, rightHeight);

            for (let i = left + 1; i < right; i++) {
                if(minHeight > arr[i]) arr[i] = minHeight;
            }
            if(leftHeight < rightHeight) left ++;
            else right --;
        }

        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return sum
    }
}
