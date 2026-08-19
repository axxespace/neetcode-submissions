class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = [];
        const length = temperatures.length;
        const result = new Array(length).fill(0);
        for(let i = 0; i < length; i++) {
            while(stack.length && temperatures[i] > temperatures[stack[stack.length]]) {
                const prev = stack.pop();
                result[i] = i - prev;
            }
            stack.push(i);
        }

        return result;
    }

}
