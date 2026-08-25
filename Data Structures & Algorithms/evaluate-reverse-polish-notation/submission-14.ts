class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let sum = parseInt(tokens[0]);
        for (let i = 1; i < tokens.length; i++) {
            switch(tokens[i]) {
                case "+":
                sum += parseInt(tokens[i - 1]);
                break;
                case "-":
                sum -= parseInt(tokens[i - 1]);
                break;
                case "*":
                sum *= parseInt(tokens[i - 1]);
                break;
                case "/":
                sum /= parseInt(tokens[i - 1]);
                break;
            }
        }

        return sum
    }
}
