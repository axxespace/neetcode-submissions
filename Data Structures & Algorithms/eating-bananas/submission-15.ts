class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let minNum = 1;
        while(left <= right) {
            const middlePile = left + Math.floor((right - left)/2);
            let totalHrs = 0;
            for(let pile of piles) {
                const hrs = Math.ceil(pile/middlePile);
                totalHrs += hrs;
                if(totalHrs > h) break;
            }
            if(totalHrs > h) {
                left = middlePile + 1;
            }
            else {
                if (minNum === 1) {
                    minNum = middlePile
                }
                if(minNum > 1 && minNum > middlePile) {
                    minNum = middlePile
                }
                right = middlePile - 1;
            }
        }
        return minNum
    }
}
