/**
 * @description Generates an array of numbers starting from a given number.
 * @param {*} n 
 * @param {*} start 
 * @returns {Array}
 */
 function generateNumbers(n, start = 1) {
    return Array.from({ length: n }, (_, i) => start + i);
}

/**
 * @description Flattens a nested array up to a specified depth.
 * @param {*} arr 
 * @param {*} depth 
 * @returns {Array}
 */
 function flattenArray(arr, depth = 1) {
    return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val, depth - 1) : val), []) : arr.slice();
}

/**
 * @description Removes duplicates from an array.
 * @param {*} arr 
 * @param {*} value 
 * @returns 
 */
 function removeDuplicates(arr, value) {
    return arr.filter(item => item !== value);
}

/**
 * @description Finds all the index of the first occurrence of a value in an array.
 * @param {*} arr 
 * @param {*} value 
 * @returns 
 */
 function findAllIndexes(arr, value) {
    return arr.reduce((acc, item, index) => {
        if (item === value) acc.push(index);
        return acc;
    }, []);
}

/**
 * @description Checks if an array is empty.
 * @param {*} arr 
 * @returns {boolean}
 */
 function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

/**
 * @description sorts an array in ascending order.
 * @param {*} arr 
 * @returns 
 */
 function sortArrayAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

/**
 * @description sorts an array in descending order.
 * @param {*} arr 
 * @returns 
 */
 function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * @description bubble sort algorithm implementation.
 * @param {*} arr 
 * @returns 
 */
 function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/**
 * @description Removes all duplicate values from an array, returning a new array with unique values.
 * @param {*} arr 
 * @returns 
 */
 function uniqueArray(arr) {
    return Array.from(new Set(arr));
}

module.exports = {
    generateNumbers,
    flattenArray,
    removeDuplicates,
    findAllIndexes,
    isEmptyArray,
    sortArrayAscending,
    sortArrayDescending,
    bubbleSort,
    uniqueArray
}


