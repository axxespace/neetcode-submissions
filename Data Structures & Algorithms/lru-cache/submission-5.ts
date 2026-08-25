class LRUCache {
    /**
     * @param {number} capacity
     */

    first: number;
    last: number;
    capacity: number;
    length: number;
    map: Map<number, {val: number, next: number | null}>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.map.has(key)) {
            return this.map.get(key).val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(!this.first) {
            this.first = key;
        }
        else {
            this.map.set(this.last, {val: this.map.get(this.last).val, next: key});
        }
        this.map.set(key, {val: value, next: null});
        this.length ++;
        this.last = key;
        if(this.length > this.capacity) {
            const updatedFirst = this.map.get(this.first).next;
            this.map.delete(this.first);
            this.first = updatedFirst;
            this.length --;
        }
    }
}
