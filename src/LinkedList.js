/**
 * Node class
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * LinkedList class
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.current = null;
    }

    /**
     * 
     * @returns {Node} head of the linked list
     */
    getHead() {
        return this.head;
    }

    /**
     * 
     * @returns {Node} current node of the linked list
     */
    getSize() {
        return this.size;
    }

    /**
     * @description Adds a node to the end of the linked list.
     * @param {*} data 
     */
    add(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /**
     * @description Remove node from the linked list.
     * @param {*} data 
     * @returns 
     */
    remove(data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    /**
     * @description Get the index of a node in the linked list.
     * @param {*} data 
     * @returns {number}
     */
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * @description Check if the linked list contains a node.
     * @param {*} data 
     * @returns {boolean}
     */
    contains(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * @description Get the node at the index.
     * @param {*} index 
     * @returns {Node} node at the index
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    /**
     * @description Insert a node at the index.
     * @param {*} index 
     * @param {*} data 
     * @returns 
     */
    insert(index, data) {
        if (index < 0 || index > this.size) {
            return;
        }
        const node = new Node(data);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
    }

    /**
     * @description Clears the linked list.
     */
    clear() {
        this.head = null;
        this.size = 0;
        this.current = null;
    }


}

module.exports ={
    LinkedList 
}