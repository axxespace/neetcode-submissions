class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const arr = [...cleanedStr];
        const aaa = arr.length % 2 ? (arr.length-1)/2 : arr.length/2;
        console.log(aaa);
        for (let i = 0; i < aaa; i ++) {
            if (arr[i] !== arr[arr.length - 1 - i]) return false;
        }
        return true;
    }
}
