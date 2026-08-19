class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const map = new Map();
        for (let i = 0; i < heights.length; i++){
            let k = 1;
            while (k<= heights[i]){
                const numInMap = map.get(k);
                if(!numInMap) map.set(k, 1)
                else map.set(k, numInMap + 1)
                k++;
            }
        }

        console.log(map);
    }
}
