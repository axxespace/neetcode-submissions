class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length){
            return this.checkInclusion(s2, s1);
        }
        let arr = Array.from({length: 26}, () => 0);
        const aCode = 'a'.charCodeAt(0);
        const length1 = s1.length;
        const length2 = s2.length;
        let left1 = 0;
        let left2 = 0;
        let right2 = 0;
        while (right2 < length2) {

            if(right2 - left2 + 1 > length1) {
                left2 ++;
                right2 = left2;
                left1 = 0;
                if(!arr.includes(1)) {
                    return true;
                }
                arr = Array.from({length: 26}, () => 0);
            }

            let index1 = aCode - s1[left1].charCodeAt(0);
            let index2 = aCode - s2[right2].charCodeAt(0);

            arr[index1] = arr[index1] > 0 ? 0 : 1;

            arr[index2] = arr[index2] > 0 ? 0 : 1;

            left1 ++;
            right2 ++;
        }
        return false;
    }
}
