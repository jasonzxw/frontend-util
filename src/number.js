/**
 * @ description: This function takes an array of numbers and returns the nth largest number in the array.
 * @param {*} arr 
 * @param {*} n 
 * @returns 
 */
function getNthLargest(arr, n) {
    if (n > arr.length) {
        return null;
    }
    const sortedArr = arr.slice().sort((a, b) => b - a);
    return sortedArr[n - 1];
}

module.exports = {
    getNthLargest
}