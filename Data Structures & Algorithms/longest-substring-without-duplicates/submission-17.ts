class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
lengthOfLongestSubstring(s) {

        if (s.length === 0) return 0;
        
        let l = 0;
        let r = 1;

        let maxLength = 1;

        while (r < s.length) {
            
            if (s.substring(l,r).includes(s[r]) ) {
                l++
                r=l+1
            }else {
                r++;
                maxLength = Math.max(r-l , maxLength);
            }
        }

        return maxLength;
    }
}
