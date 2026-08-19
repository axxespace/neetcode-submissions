class MinStack {
    constructor() {}
    arr = [{min: 0}]
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minVal = this.arr[this.arr.length - 1].min
        this.arr.push({value: val, min: minVal > val ? val : minVal})
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr = this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1].value;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.arr.at(-1).min
    }
}
