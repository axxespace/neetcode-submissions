class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (!s || !t || s.length < t.length) {
            return "";
        }

        // Step 1: Create frequency map for target string t
        const dictT = new Map<string, number>();
        for (const char of t) {
            dictT.set(char, (dictT.get(char) || 0) + 1);
        }

        const required = dictT.size;
        let formed = 0;

        // Window frequency map
        const windowCounts = new Map<string, number>();

        // Pointers and tracking for the minimum window
        let l = 0;
        let r = 0;
        let minLen = Infinity;
        let startIdx = 0;

        while (r < s.length) {
            const charR = s[r];
            windowCounts.set(charR, (windowCounts.get(charR) || 0) + 1);

            // If the current character's frequency matches its requirement in t, increment formed
            if (dictT.has(charR) && windowCounts.get(charR) === dictT.get(charR)) {
                formed++;
            }

            // Try and contract the window until it ceases to be valid
            while (l <= r && formed === required) {
                const charL = s[l];

                // Update our minimum window if a smaller one is found
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    startIdx = l;
                }

                // Remove the leftmost character from the window
                windowCounts.set(charL, windowCounts.get(charL)! - 1);
                if (dictT.has(charL) && windowCounts.get(charL)! < dictT.get(charL)!) {
                    formed--;
                }

                l++;
            }

            r++;
        }

        return minLen === Infinity ? "" : s.substring(startIdx, startIdx + minLen);
    }
}
