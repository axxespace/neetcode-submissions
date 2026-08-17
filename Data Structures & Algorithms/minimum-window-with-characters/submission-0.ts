class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
    if (s.length === 0 || t.length === 0) return "";

    // Dictionary to keep track of character frequencies in t
    const targetCount = new Map<string, number>();
    for (const char of t) {
        targetCount.set(char, (targetCount.get(char) || 0) + 1);
    }

    // Number of unique characters in t that need to be present in the window
    const required = targetCount.size;
    
    // Number of unique characters currently matching their required frequency in the window
    let formed = 0;

    // Dictionary to keep track of character frequencies in the current window
    const windowCount = new Map<string, number>();

    // Pointers and result tracking: [window length, left pointer, right pointer]
    let l = 0, r = 0;
    let minLen = Infinity;
    let minLeft = 0;

    while (r < s.length) {
        const c = s[r];
        windowCount.set(c, (windowCount.get(c) || 0) + 1);

        // If the current character's frequency matches its target frequency, increment 'formed'
        if (targetCount.has(c) && windowCount.get(c) === targetCount.get(c)) {
            formed++;
        }

        // Try to contract the window from the left until it's no longer valid
        while (l <= r && formed === required) {
            const leftChar = s[l];

            // Update the minimum window if the current one is smaller
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minLeft = l;
            }

            // Remove the character from the left of the window
            windowCount.set(leftChar, windowCount.get(leftChar)! - 1);
            if (targetCount.has(leftChar) && windowCount.get(leftChar)! < targetCount.get(leftChar)!) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}

}
