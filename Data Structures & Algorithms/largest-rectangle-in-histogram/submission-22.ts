class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        const stack: { index: number; height: number }[] = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            // Pop taller elements and calculate their max possible areas
            while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
                const top = stack.pop()!;
                maxArea = Math.max(maxArea, top.height * (i - top.index));
                start = top.index; // Carry back the start index
            }

            stack.push({ index: start, height: heights[i] });
        }

        // Process bars that extend all the way to the right end
        for (const { index, height } of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}

