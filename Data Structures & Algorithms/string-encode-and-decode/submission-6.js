class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (const s of strs) {
            // Append length + delimiter + actual string
            encoded += `${s.length}#${s}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            // Find the location of the delimiter '#' starting from pointer i
            let j = str.indexOf('#', i);
            
            // Extract and parse the length integer between i and j
            let length = parseInt(str.substring(i, j), 10);
            
            // Extract the word immediately after the '#' delimiter
            let word = str.substring(j + 1, j + 1 + length);
            decoded.push(word);
            
            // Advance the pointer past the extracted word to start the next item
            i = j + 1 + length;
        }

        return decoded;
    }
}
