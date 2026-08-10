class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const obj = {
            '}': "{",
            ')': "(",
            ']': "[", 
        }
        const arr = [];

        for (let char of s) {
            if(!obj[char]) {
                arr.push(char)
            }
            else {
                if (arr.at(-1) === obj[char]) {
                    arr.pop();
                    continue;
                }
                else {
                    return false
                }
            }
        }
        if(arr.length > 0)return false
        return true
    }
}
