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
    const result = [];
    let i = 0;

    while (i < str.length) {
        // 1. Find where the next '#' is located starting from index i
        let j = str.indexOf('#', i);

        // 2. Parse the FULL number between i and j (handles multi-digit lengths like 12 or 100)
        let length = parseInt(str.substring(i, j), 10);

        // 3. Move i past the '#' symbol
        i = j + 1;

        // 4. Extract the exact word using the parsed length
        let word = str.substring(i, i + length);
        result.push(word);

        // 5. Jump i forward past the word to start the next iteration
        i += length;
    }

    return result;
}
}
