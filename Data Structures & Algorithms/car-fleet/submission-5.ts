class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push({position: position[i], speed: speed[i]})
        }
        cars.sort((a,b) => b.position - a.position);
        let fleet = 0;
        for (let [index, car] of cars.entries()) {
            if(fleet === 0 && index === 0) {
                fleet++;
            }
            else{
                const currentCar = cars[index];
                const prevCar = cars[index - 1]
                if((target - currentCar.position)/currentCar.speed > (target - prevCar.position)/prevCar.speed) {
                    fleet++
                }
            }
        }

        return fleet;
    }
}
