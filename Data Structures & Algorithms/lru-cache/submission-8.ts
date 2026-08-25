class LRUCache {
    capacity: number;
    map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }
        
        // Refresh the key's recency by deleting and re-setting it
        const value = this.map.get(key)!;
        this.map.delete(key);
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        // If the key already exists, delete it first so we can update its position
        if (this.map.has(key)) {
            this.map.delete(key);
        } 
        // If we are at capacity and adding a new item, evict the oldest (first) item
        else if (this.map.size >= this.capacity) {
            const oldestKey = this.map.keys().next().value; // First item in Map insertion order
            this.map.delete(oldestKey);
        }

        // Insert the new/updated key as the most recently used (at the end)
        this.map.set(key, value);
    }
}
