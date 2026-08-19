class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    capacity = 0;

    size = 0;

    arr = [];

    constructor(capacity) {
        if(capacity > 0) {
            this.capacity = capacity;
        }
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        if(this.arr.length && this.arr.length - 1 >= i) {
            return this.arr[i];
        }
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        const length = this.arr.length
        if (length + 1 >= this.capacity){
            this.resize();
        }
        this.arr[this.arr.length] = n;
        this.size = this.size ++;
    }

    /**
     * @returns {number}
     */
    popback() {
        const arrLength = this.arr.length;
        const lastElement = this.arr[arrLength - 1];
        const arr = [];
        for (let i; i < arrLength - 1; i++){
            arr[i] = this.arr[i];
        }
        this.arr = arr;
        this.size = this.size - 1;
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
