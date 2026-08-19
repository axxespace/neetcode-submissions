class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const arr = [];
        for (let i = 0; i < position.length; i++) {
            arr.push({position: position[i], speed: speed[i]})
        }
        arr.sort((a,b) => b.position - a.position);

        console.log(arr);

        return 1;
    }
}
