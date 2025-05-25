/**
 * Queue implementation using an array
 */
class Queue{
    constructor() {
        this.items = [];
    }
    /**
     * @description Adds an item to the queue.
     * @param {*} item 
     */
    enqueue(item) {
        this.items.push(item);
    }

    /**
     * @description Removes the first item from the queue.
     * @returns {*} The first item in the queue.
     */
    dequeue() {
        return this.items.shift();
    }
    
    /**
     * @description Gets the first item in the queue without removing it.   
     * @returns {*} The first item in the queue.
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * @description Gets the first item in the queue without removing it.
     * @returns {*} The first item in the queue.
     */
    size() {
        return this.items.length;
    }

    /**
     * @description Gets the first item in the queue without removing it.
     * @returns {*} The first item in the queue.
     */
    has(item) {
        return this.items.includes(item);
    }

    /**
     * @description Executes all items in the queue.
     * @param {*} callback 
     */
    execute(callback) {
        while (!this.isEmpty()) {
            const item = this.dequeue();
            if(typeof item === 'function') {
                item();
            }else{
                callback(item);
            }
        }
    }
    /**
     * @description Clears ths Queus.
     * @returns {*} void.
     */
    clear() {
        this.items = [];
    }
}

module.exports = {
    Queue
}