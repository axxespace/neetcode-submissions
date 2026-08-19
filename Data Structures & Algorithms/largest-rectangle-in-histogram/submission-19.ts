class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxSum = 0;
        const stack = [];
        const getStackLastparams = () : Array<number> => {
            return [stack[stack.length - 1].length, stack[stack.length - 1].height]
        }

        for(let i = 0; i < heights.length; i++) {
            if(stack.length === 0) {
                maxSum = heights[i];
                stack.push({height: heights[i], length: 1})
            }
            else {
                const [prevStackLength, prevStackHeight] = getStackLastparams();
                const currentHeight = heights[i];
                if(currentHeight > prevStackHeight) {
                    if(currentHeight > maxSum) {
                        maxSum = currentHeight;
                    }
                    stack[stack.length - 1].length += 1;
                    const sum = prevStackHeight * (prevStackLength + 1)       
                    if(sum > maxSum) {
                        maxSum = sum;
                    }
                    stack.push({height: currentHeight, length: 1})
                }
                else if(currentHeight === prevStackHeight) {
                        stack[stack.length - 1].length += 1;
                        const sum = prevStackHeight * (prevStackLength + 1)       
                        if(sum > maxSum) {
                            maxSum = sum;
                        }
                }
                else if(currentHeight < prevStackHeight) {
                    const sum = prevStackLength * prevStackHeight;
                    if(sum > maxSum) {
                        maxSum = sum;
                    }
                    stack.pop();
                    stack.push({height: currentHeight, length: prevStackLength + 1})
                }
            }
        }
        console.log(maxSum)
        return 1;
    }
}

