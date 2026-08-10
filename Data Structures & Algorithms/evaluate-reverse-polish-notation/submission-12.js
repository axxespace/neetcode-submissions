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
                let a;
                let b;

                switch(token) {
                    case '+' :
                    a = arr.pop();
                    b = arr.pop();
                    arr.push(b+a)
                    break;
                    case '-' :
                    a = arr.pop();
                    b = arr.pop();
                    arr.push(b-a)
                    break;
                    case '*' :
                    a = arr.pop();
                    b = arr.pop();
                    arr.push(Math.trunc(b*a))
                    break;
                    case '/' :
                    a = arr.pop();
                    b = arr.pop();
                    arr.push(Math.trunc(b/a))
                }
            }
        }
        return arr.at(-1);
    }
}
