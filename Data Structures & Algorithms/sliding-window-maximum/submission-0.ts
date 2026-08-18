class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // Stores indices of elements
    let head = 0; // Pointer for the front of the deque to avoid O(N) shift operations

    for (let i = 0; i < nums.length; i++) {
        if (head < deque.length && deque[head] === i - k) {
            head++;
        }

        while (deque.length > head && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }
    }

    return result;
}

}
