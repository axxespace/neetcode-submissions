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
        console.log(cars)
        let stack = [];
        let fleet = 0;

        for(let i = 0; i < cars.length; i++) {
            if(stack.length > 0){
                const time = (target - cars[i].position)/cars[i].speed
                const prevTime = (target - cars[stack[0]].position)/cars[stack[0]].speed;
                if(time < prevTime) {
                    fleet++;
                    stack = [];
                }
            }
            else {
                fleet++;
            }
            stack.push(i);
        }

        return fleet;
    }
}
