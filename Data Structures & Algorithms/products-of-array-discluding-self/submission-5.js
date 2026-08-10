class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const zerosLength = nums.filter((num) => num === 0).length;

        let allOutput = 1;
        for(const num of nums) {
            if(num !== 0) {
                allOutput *= num;
            }
        }

        const finalArr = [];
        for(const num of nums) {
            if (zerosLength >= 2) {
                finalArr.push(0)
            }
            else if(num !== 0 && zerosLength) {
                finalArr.push(0)
            }
            else if( num === 0) {
                finalArr.push(allOutput);
            }
            else {
                finalArr.push(allOutput / num)
            }
            
        }

        return finalArr;
        
    }
}
