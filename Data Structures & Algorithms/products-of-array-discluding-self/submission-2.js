class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const hasTwoOrMoreZeros =       nums.filter((num) => num === 0).length;
        console.log(hasTwoOrMoreZeros)
        let allOutput = 1;
        for(const num of nums) {
            if(num !== 0) {
                allOutput *= num;
            }
        }

        const finalArr = [];
        for(const num of nums) {
            if (hasTwoOrMoreZeros) {
                finalArr.push(0)
            }
            else if(num === 0) {
                finalArr.push(allOutput)
            }
            else {
                finalArr.push(allOutput / num)
            }
            
        }

        return finalArr;
        
    }
}
