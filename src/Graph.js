/**
 * Graph class implementation
 */
class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * @description Adds a vertex to the graph.
     * @param {*} vertex 
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /**
     * @description Adds an edge between two vertices in the graph.
     * @param {*} vertex1 
     * @param {*} vertex2 
     */
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    /**
     * @description Removes an edge between two vertices in the graph.
     * @param {*} vertex1 
     * @param {*} vertex2 
     */
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    /**
     * @description Removes a vertex and all edges connected to it.
     * @param {*} vertex 
     */
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    /**
     * @description Grahp has vertex.
     * @param {*} vertex 
     * @returns 
     */
    hasVertex(vertex) {
        return this.adjacencyList.hasOwnProperty(vertex);
    }

    /**
     * @description Checks if two vertices are connected.
     * @param {*} vertex1 
     * @param {*} vertex2 
     * @returns {boolean} True if the vertices are connected, false otherwise.
     */
    isConnected(vertex1, vertex2) {
        return this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2);
    }

    /**
     * @description Gets all edges in the graph.
     * @returns {Array} An array of edges.
     */
    getEdges() {
        const edges = [];
        for (const vertex in this.adjacencyList) {
            for (const adjacentVertex of this.adjacencyList[vertex]) {
                if (!edges.includes(`${adjacentVertex}-${vertex}`)) {
                    edges.push(`${vertex}-${adjacentVertex}`);
                }
            }
        }
        return edges;
    }

    /**
     * @description bfs Gets all vertices in the graph.
     * @param {*} startVertex 
     * @param {*} callback 
     */
    bfs(startVertex, callback) {
        const visited = {};
        const queue = [startVertex];
        visited[startVertex] = true;

        while (queue.length) {
            const vertex = queue.shift();
            callback(vertex);

            for (const adjacentVertex of this.adjacencyList[vertex]) {
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    queue.push(adjacentVertex);
                }
            }
        }
    }

    /**
     * @description dfs Gets all vertices in the graph.
     * @param {*} startVertex 
     * @param {*} callback 
     */
    dfs(startVertex, callback) {
        const visited = {};
        const stack = [startVertex];
        visited[startVertex] = true;

        while (stack.length) {
            const vertex = stack.pop();
            callback(vertex);

            for (const adjacentVertex of this.adjacencyList[vertex]) {
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true;
                    stack.push(adjacentVertex);
                }
            }
        }
    }

    /**
     * @description Gets all vertices in the graph.
     * @returns {Array} An array of vertices.
     */
    clear(){
        this.adjacencyList = {};
    }
}

module.exports = {
    Graph
};