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
                const lastHeightInStack = stack[stack.length - 1].height;
                const currentHeight = heights[i];
                const prevHeight = heights[i - 1];
                if(currentHeight > prevHeight) {
                    if(currentHeight > maxSum) {
                        maxSum = currentHeight;
                    }
                    stack[stack.length - 1].length += 1;
                }
                if(currentHeight < prevHeight) {
                    const prevLength = stack[stack.length - 1].length;
                    const prevSum = prevLength * stack[stack.length - 1].height;
                    if(prevSum > maxSum) maxSum = prevSum;
                    stack.pop();
                    stack.push({height:currentHeight, length: prevLength + 1 })
                }
            }
        }
        console.log(stack)
    }
}

