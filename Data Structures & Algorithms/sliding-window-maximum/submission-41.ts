class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque: number[] = []; // Stores indices of elements
        const result: number[] = [];
        let head = 0; // Pointer to the front of the queue to avoid O(N) shift() overhead
        
        for (let i = 0; i < nums.length; i++) {
            // 1. Remove indices that are outside the current sliding window
            if (head < deque.length && deque[head] < i - k + 1) {
                head++;
            }
            
            // 2. Remove elements from the back that are smaller than the current element
            // (They are useless because the current element is larger and will outlive them)
            while (deque.length > head && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }
            
            // 3. Push the current element's index
            deque.push(i);
            
            // 4. Once the first window of size k is reached, record the max
            if (i >= k - 1) {
                result.push(nums[deque[head]]);
            }
        }
        
        return result;
    }


}
