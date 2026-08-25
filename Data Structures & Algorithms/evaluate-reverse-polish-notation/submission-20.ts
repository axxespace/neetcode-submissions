class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const arr: number[] = [];
        for (let i = 0; i < tokens.length; i++) {
            if(tokens[i] === '-' 
            || tokens[i] === '+' 
            || tokens[i] === '*' 
            || tokens[i] === '/'){
                const right = arr.pop();
                const left = arr.pop();

                switch(tokens[i]) {
                    case "+":
                        arr.push(Math.floor(left + right));
                    break;
                    case "-":
                        arr.push(Math.floor(left - right));
                    break;
                    case "*":
                        arr.push(Math.floor(left * right));
                    break;
                    case "/":
                        arr.push(Math.floor(left / right));
                    break;
                }
            }
            else {
                arr.push(parseInt(tokens[i]))
            }
        }

        return arr[0];
    }
}
