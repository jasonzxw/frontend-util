/**
 * @description: A function that generates a random integer between two values.
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description This function returns a random arrray in array.
 * @param {*} array 
 * @returns 
 */
function getRandomFromArray(array) {
    return array[getRandomInt(0, array.length - 1)];
}

/**
 * @description This function returns int number
 * @param {*} num 
 * @returns 
 */
function getInteger(num) {
    let x = Number(num);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

/**
 * @description This function returns float number
 * @param {*} num 
 * @returns 
 */
function getFloat(num) {
    return num - getInteger(num);
}

module.exports = {
    getRandomInt,
    getRandomFromArray,
    getInteger,
    getFloat
}
