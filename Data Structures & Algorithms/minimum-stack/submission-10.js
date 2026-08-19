class MinStack {
    constructor() {}
    arr = []
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minVal = this.arr.at(-1) ? Math.min(this.arr.at(-1), val) : val;
        this.arr.push({value: val, min: minVal})
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr.at(-1).value
        console.log(this.arr)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.arr.at(-1).min
    }
}
