class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxSum = 0;
        const stack = [];
        for(let i = 0; i < heights.length; i++) {
            if(stack.length === 0) {
                maxSum = heights[i];
                stack.push({height: heights[i], length: 1})
            }
            else {
                const currentHeight = heights[i];
                const prevHeight = heights[i - 1];
                if(currentHeight >= prevHeight) {
                    if(currentHeight > maxSum) {
                        maxSum = currentHeight;
                    }
                    stack[stack.length - 1].length += 1;
                    stack.push({height: currentHeight, length: stack[stack.length - 1].length + 1})
                }
                if(currentHeight < prevHeight) {
                        const prevStackLength = stack[stack.length - 1].length;
                        const prevStackHeight = stack[stack.length - 1].height;
                        const prevSum = prevStackLength * prevStackHeight;
                        if(prevSum > maxSum) maxSum = prevSum;
                        if(currentHeight < prevStackHeight) {
                            stack.pop();
                            stack.push({height:currentHeight, length: prevStackLength + 1 })
                        }
                }
            }
        }
        console.log(stack)
        return 1;
    }
}

