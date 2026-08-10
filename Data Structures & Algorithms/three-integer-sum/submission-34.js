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
        const set = new Set();
        for (let i = 0; i < nums.length; i++) { 
            let right = nums.length - 1;
            while (right > i + 1) {
                const leftNum = nums[i];
                const rightNum = nums[right]
                const neededNum = - (leftNum + rightNum);
                if(neededNum === leftNum && neededNum === rightNum) {
                    if(map.get(neededNum) >=3) {
                        set.add([neededNum, leftNum, rightNum].sort((a, b) => a -b ).toString())
                    }
                }
                else if(neededNum === leftNum) {
                    if(map.get(neededNum) >=2) {
                        set.add([neededNum, leftNum, rightNum].sort((a, b) => a -b ).toString())
                    }
                }
                else if(neededNum === rightNum) {
                    if(map.get(neededNum) >=2) {
                        set.add([neededNum, leftNum, rightNum].sort((a, b) => a -b ).toString())
                    }
                }
                else {
                    if(map.get(neededNum)) {
                        set.add([neededNum, leftNum, rightNum].sort((a, b) => a -b ).toString())
                    }
                }
                right --;
            }
        }

        console.log(set)
        return Array.from(set, item => item.split(',').map(Number));
        
        // console.log(arr)

        // return arr
    }
}
