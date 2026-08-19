class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s];
        const aaa = arr.length % 2 ? (arr.length-1)/2 : arr.length/2;
        console.log(aaa);
        // for (i = 0; i < arr.length % 2 ? (arr.length-1)/2 : arr.length/2; i ++) {
        //     if (arr[i] !== arr[arr.length -1 - i]) return false
        // }
        // return true;
    }
}
