/**
 * @description Pauses execution for a specified number of milliseconds.
 * @param {*} ms 
 * @returns {Promise}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * @description Executes an array of asynchronous functions in order, waiting for each to complete before starting the next.
 * @param {*} functions 
 */
async function executeAsyncFunctionsInOrder(functions) {
    for (const func of functions) {
        await func();
    }
}

/**
 * @description Executes an array of asynchronous functions concurrently, waiting for all to complete.
 * @param {*} functions 
 * @returns {Promise<Array>}
 */
async function executeAsyncFunctionsConcurrently(functions) {
    const result = await Promise.all(functions.map(func => func()));
    return result;
}

/**
 * @description Runs an array of asynchronous tasks with a specified maximum concurrency.
 * @param {*} tasks 
 * @param {*} maxConcurrency 
 * @returns {Array}
 */
async function runWithConcurrency(tasks, maxConcurrency) {
    const results = [];
    let current = 0;
    const workers = Array(Math.min(maxConcurrency, tasks.length))
        .fill()
        .map(async () => {
            while (current < tasks.length) {
                const index = current++;
                try {
                    results[index] = await tasks[index]();
                } catch (err) {
                    results[index] = err;
                }
            }
        });

    await Promise.all(workers);
    return results;
}

/**
 * @description Converts a synchronous function to an asynchronous one, allowing it to be used with async/await.
 * @param {*} fn 
 * @returns {Promise}
 */
async function asyncify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        try {
            resolve(fn(...args));
        } catch (error) {
            reject(error);
        }
    });
}




module.exports = {
    sleep,
    executeAsyncFunctionsInOrder,
    executeAsyncFunctionsConcurrently,
    runWithConcurrency,
    asyncify
}