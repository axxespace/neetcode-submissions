class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charMap = new Map();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            // If the character is already in our window, move the left pointer 
            // to the right of its previous occurrence
            if (charMap.has(char) && charMap.get(char) >= left) {
                left = charMap.get(char) + 1;
            }

            // Update the character's latest index and calculate the max length
            charMap.set(char, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
