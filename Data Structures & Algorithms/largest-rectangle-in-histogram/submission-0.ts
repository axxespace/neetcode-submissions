class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    // Stack stores tuple pairs: [startIndex, height]
    const stack: [number, number][] = [];

    for (let i = 0; i < heights.length; i++) {
        let start = i;
        const h = heights[i];

        // Pop taller bars that cannot extend past the current index
        while (stack.length > 0 && stack[stack.length - 1][1] > h) {
            const [index, height] = stack.pop()!;
            maxArea = Math.max(maxArea, height * (i - index));
            start = index; // Current shorter bar can extend back to where popped bar started
        }

        stack.push([start, h]);
    }

    // Process remaining bars extending all the way to the end of the array
    for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
}

}
