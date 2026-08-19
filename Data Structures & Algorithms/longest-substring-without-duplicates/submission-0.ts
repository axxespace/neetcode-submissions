class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let sum = 0;
        let left = 0;
        let right = 1;
        while (right < s.length) {
            const slicedStr = s.slice(left, right);
            if(! slicedStr.includes(s[right])) {
                sum = right - left + 1 > sum ? right - left + 1 : sum;
            }
            else {
                left = right
            }
            right ++
        }
        return sum;
    }
}
