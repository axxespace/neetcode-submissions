class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encodedStr;
    encode(strs) {
        let aaa = '';
        for (const str of strs) {
            aaa += `${str.length}#${str}`
        }
        this.encodedStr = aaa;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strArr = this.encodedStr.split('');
        let i = 0;
        while (i < strArr.length) {
            if(i>0 && strArr[i] === '#' && isNumber(strArr[i-1])) {
                const slicedStr = this.encodedStr.slice
                (i + 1, i + 1 + strArr[i-1]);
                i += strArr[i-1];
            }
            else i++;
        }
    }
}
