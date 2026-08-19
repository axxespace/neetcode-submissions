class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let sum = 0;
        let left = 0;
        let right = s.length > 1 ? 1 : 0;
        while (right < s.length) {
            const slicedStr = s.slice(left, right);
            if(! slicedStr.includes(s[right])) {
                sum = right - left + 1 > sum ? right - left + 1 : sum;
            }
            else {
                sum = sum < 1 ? 1 : sum;
                const slicedStr = s.slice(left, right - 1);
                left = slicedStr.indexOf(s[right]) + 1;
            }
            right ++
        }
        return sum;
    }
}
