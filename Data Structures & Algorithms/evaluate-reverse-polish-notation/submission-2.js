class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const arr = [];
        const set = new Set(['+', '-', '*', '/'])
        for (let [index, token] of tokens.entries()) {
            if(!set.has(token)) {
                arr.push(parseInt(token))
            }
            else {
                switch(token) {
                    case '+' :
                    arr.push(arr[index-2] + arr[index-1])
                    arr.splice(-2, 1)
                    break;
                    case '-' :
                    arr.push(arr[index-2] - arr[index-1])
                    arr.splice(-2, 1)
                    break;
                    case '*' :
                    arr.push(arr[index-2] * arr[index-1])
                    arr.splice(-2, 1)
                    break;
                    case '/' :
                    arr.push(arr[index-2] / arr[index-1])
                    arr.splice(-2, 1)
                }
            }
        }
        return arr.at(-1);
    }
}
