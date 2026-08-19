class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const map = new Map();
        for (let num of nums) {
            if(!map.get(num)){
                map.set(num, 1)
            }
            else{
                map.set(num, map.get(num) + 1)
            }
        }
        console.log(map)
        // const arr = [];
        // for (let i = 0; i < nums.length; i++) { 
        //     while (right > i + 1) {
        //     }
        // }
        
        // console.log(arr)

        // return arr
    }
}
