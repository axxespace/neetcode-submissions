class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        const list = new Map();
        for (const str of strs) {
            const sortedStr = str.split('').sort().join();
            if (!list.get(sortedStr)) {
                list.set(sortedStr, [])
            }
            list.get(sortedStr).push(str);
        }
        return Array.from(list.values());
    }
}
