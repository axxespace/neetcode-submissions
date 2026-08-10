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
                    arr.push(arr.at(-2) + arr.at(-1))
                    arr.splice(-3, 2)
                    break;
                    case '-' :
                    arr.push(arr.at(-2) - arr.at(-1))
                    arr.splice(-3, 2)
                    break;
                    case '*' :
                    arr.push(Math.trunc(arr.at(-2) * arr.at(-1)))
                    arr.splice(-3, 2)
                    break;
                    case '/' :
                    arr.push(Math.trunc(arr.at(-2) / arr.at(-1)))
                    arr.splice(-3, 2)
                }
            }
        }
        return arr.at(-1);
    }
}
