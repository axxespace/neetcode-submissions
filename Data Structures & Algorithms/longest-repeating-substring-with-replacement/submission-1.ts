class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Array(26).fill(0);
        let left = 0;
        let maxCount = 0;
        let maxLength = 0;
        const aCode = 'A'.charCodeAt(0);

        for (let right = 0; right < s.length; right++) {
            const charIndex = s.charCodeAt(right) - aCode;
            count[charIndex]++;

            maxCount = Math.max(maxCount, count[charIndex]);

            if ((right - left + 1) - maxCount > k) {
                count[s.charCodeAt(left) - aCode]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
