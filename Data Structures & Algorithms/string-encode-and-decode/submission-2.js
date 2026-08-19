class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let aaa = '';
        for (const str of strs) {
            aaa += `${str.length}#${str}`
        }
        console.log(aaa);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {}
}
