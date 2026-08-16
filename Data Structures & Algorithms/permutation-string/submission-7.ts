class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const len1 = s1.length;
        const len2 = s2.length;
        
        if (len1 > len2) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        for (let i = 0; i < len1; i++) {
            s1Count[s1.charCodeAt(i) - aCode]++;
            s2Count[s2.charCodeAt(i) - aCode]++;
        }

        const arraysEqual = (a: number[], b: number[]): boolean => {
            for (let i = 0; i < 26; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

        if (arraysEqual(s1Count, s2Count)) return true;

        for (let i = len1; i < len2; i++) {
            s2Count[s2.charCodeAt(i) - aCode]++;
            
            s2Count[s2.charCodeAt(i - len1) - aCode]--;

            if (arraysEqual(s1Count, s2Count)) return true;
        }

        return false;
    }
}
