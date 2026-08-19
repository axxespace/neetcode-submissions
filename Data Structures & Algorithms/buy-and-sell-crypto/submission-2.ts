class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0;
        let currentMin: number;
        for(let [i, price] of prices.entries()) {   
            if(!currentMin) currentMin = price;
            if(i > 0 && price > currentMin){
                profit = price - currentMin > profit ? price - currentMin : profit;
            }
            else if(i > 0 && price < currentMin) {
                currentMin = price;
            }
        }

        return profit;
    }
}
