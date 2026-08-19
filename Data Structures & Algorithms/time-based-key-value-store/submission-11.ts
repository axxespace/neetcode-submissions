class TimeMap {
    keyStore: Map<string, {value: string, timestamp: number}[]>

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const list = this.keyStore.get(key) || [];
        this.keyStore.set(key, [...list, { value, timestamp }]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arr = this.keyStore.get(key);
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if(arr[mid].timestamp === timestamp){
                return arr[mid].value;
            }
            if(left === right && arr[mid].timestamp < timestamp) {
                return arr[mid].value;
            }
            if(left === right && arr[mid].timestamp > timestamp) {
                return '';
            }
            if(arr[mid].timestamp < timestamp) {
                left = mid + 1;
            }
            if(arr[mid].timestamp > timestamp) {
                right = mid;
            }
        }
    }
}
