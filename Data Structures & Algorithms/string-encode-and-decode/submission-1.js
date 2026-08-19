class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for (const str of strs) {
            str += `${str.length}#${str}`
        }
        console.log(str);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {}
}
