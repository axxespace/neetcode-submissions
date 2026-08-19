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
            if(i > 0 && prices[i] > currentMin){
                profit = prices[i] - currentMin > profit ? prices[i] - currentMin : profit;
            }
            else if(i > 0 && prices[i] < currentMin) {
                currentMin = prices[i];
            }
        }

        console.log(profit);
    }
}
