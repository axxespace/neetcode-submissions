class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const countMap = new Map();

    // Step 1: Count frequency of each number
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Create buckets where the array index corresponds to frequency
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    
    for (const [num, freq] of countMap.entries()) {
        buckets[freq].push(num);
    }

    // Step 3: Gather elements starting from the highest frequency bucket
    const result = [];
    for (let i = buckets.length - 1; i > 0; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }

    return result;

    }
}
