class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        const sortedPiles = piles.sort((a, b) => a - b);
        const length = piles.length;
        let left = 0;
        let right = piles.length - 1;
        let currentTotalHours = 0;
        let currentPile = 0;
        while(left <= right) {
            const middlePile = left + Math.floor((right - left)/2);
            const ceil = Math.ceil(sortedPiles[length - 1]/sortedPiles[middlePile]);
            const totalHours = (middlePile + 1) + (length - middlePile - 1)*ceil;
            console.log(middlePile, ceil, totalHours);
            if(totalHours > h) left = middlePile + 1;
            if(totalHours < h) {
                if(currentTotalHours < totalHours) {
                    currentTotalHours = totalHours;
                    currentPile = sortedPiles[middlePile]
                }
                right = middlePile - 1;
            };
            if(totalHours === h) return sortedPiles[middlePile];
        }
        return currentPile
    }
}
