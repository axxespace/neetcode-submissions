class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
    if (s.length === 0 || t.length === 0) return "";

    const targetCount = new Map<string, number>();
    for (const char of t) {
        targetCount.set(char, (targetCount.get(char) || 0) + 1);
    }

    const required = targetCount.size;
    
    let formed = 0;

    const windowCount = new Map<string, number>();

    let l = 0, r = 0;
    let minLen = Infinity;
    let minLeft = 0;

    while (r < s.length) {
        const c = s[r];
        windowCount.set(c, (windowCount.get(c) || 0) + 1);

        if (targetCount.has(c) && windowCount.get(c) === targetCount.get(c)) {
            formed++;
        }

        while (l <= r && formed === required) {
            const leftChar = s[l];

            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minLeft = l;
            }

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
