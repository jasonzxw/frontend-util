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

/**
 * @description: This function returns the number of decimal places in a number.
 * @param {*} num 
 * @returns 
 */
function getDecimalPlaces(num) {
    if (num % 1 !== 0) {
        return num.toString().split('.')[1].length;
    }
    return 0;
}

/**
 * @description: This function adds two floating point numbers with precision.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function addFloat(num1, num2) {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const maxDecimalPlaces = Math.max(decimalPlaces1, decimalPlaces2);
    const factor = Math.pow(10, maxDecimalPlaces);
    return (num1 * factor + num2 * factor) / factor;
}
console.log(addFloat(0.1, 0.2)); // 0.3

/**
 * @description: This function subtracts two floating point numbers with precision.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function subtractFloat(num1, num2) {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const maxDecimalPlaces = Math.max(decimalPlaces1, decimalPlaces2);
    const factor = Math.pow(10, maxDecimalPlaces);
    return (num1 * factor - num2 * factor) / factor;
}

/**
 * @description: This function multiplies two floating point numbers with precision.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function multiplyFloat(num1, num2) {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const totalDecimalPlaces = decimalPlaces1 + decimalPlaces2;
    return (num1 * num2) / Math.pow(10, totalDecimalPlaces);
}

/**
 * @description: This function divides two floating point numbers with precision.
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function divideFloat(num1, num2) {
    const decimalPlaces1 = getDecimalPlaces(num1);
    const decimalPlaces2 = getDecimalPlaces(num2);
    const totalDecimalPlaces = decimalPlaces1 - decimalPlaces2;
    return (num1 / num2) * Math.pow(10, totalDecimalPlaces);
}


module.exports = {
    getNthLargest,
    getDecimalPlaces,
    addFloat,
    subtractFloat,
    multiplyFloat,
    divideFloat,
}