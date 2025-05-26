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

/**
 * @description: This function formats a number with commas as thousands separators and two decimal places.
 * @param {*} num 
 * @returns {string}
 */
function formatNumber(num) {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

/**
 * @description: This function converts a number with commas to a decimal number.
 * @param {*} num 
 * @returns 
 */
function convertToDecimal(num) {
    return parseFloat(num.replace(/,/g, ''));
}

/**
 * @description: This function clamps a number between a minimum and maximum value.
 * @param {*} num 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * @description: This function converts a number from one(10) base to another(2-36).
 * @param {*} number 
 * @param {*} base 
 * @returns {string}
 */
function convertBase(number,base=10){
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Invalid number');
    }
    if (base < 2 || base > 36) {
        throw new Error('Base must be between 2 and 36');
    }
    return number.toString(base);
}

/**
 * @description: This function checks if a number is an integer.
 * @param {*} num 
 * @returns {boolean}
 */
function isInteger(num) {
    return Number.isInteger(num);
}

/**
 * @description: This function pads a number with a specified character to a specified length.
 * @param {*} num 
 * @param {*} padNum 
 * @param {*} length 
 * @returns {string}
 */
function padNumber(num, padNum ,length = 2) {
    return num.toString().padStart(length, padNum.toString());
}

module.exports = {
    getNthLargest,
    getDecimalPlaces,
    addFloat,
    subtractFloat,
    multiplyFloat,
    divideFloat,
    formatNumber,
    convertToDecimal,
    clampNumber,
    convertBase,
    isInteger,
    padNumber
}