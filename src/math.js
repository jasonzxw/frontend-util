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

/**
 * @description This function returns the radian to angle.
 * @param {*} radian 
 * @returns 
 */
function radianToAngle(radian) {
    return radian * (180 / Math.PI);
}

/**
 * @description This function returns the angle to radian.
 * @param {*} angle 
 * @returns 
 */
function angleToRadian(angle) {
    return angle * (Math.PI / 180);
}

/**
 * @description This function returns the radian between point and  center of a circle .
 * @param {*} x 
 * @param {*} y 
 * @param {*} centerX 
 * @param {*} centerY 
 * @returns 
 */
function getRadian(x, y, centerX, centerY) {
    return Math.atan2(y - centerY, x - centerX);
}

module.exports = {
    getRandomInt,
    getRandomFromArray,
    getInteger,
    getFloat,
    radianToAngle,
    angleToRadian,
    getRadian
}
