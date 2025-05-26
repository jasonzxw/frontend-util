/**
 * @description: a simple type check utility
 * @param {*} target 
 * @param {*} type 
 * @returns 
 */
function isType(target, type) {
    return Object.prototype.toString.call(target) === `[object ${type}]`;
}

/**
 * @description: checks if the target is a valid number (not NaN).
 * @param {*} target 
 * @returns {boolean}
 */
function isNumber(target) {
    return isType(target, 'Number') && !isNaN(target);
}

/**
 * @description: checks if the target is a valid string.
 * @param {*} target 
 * @returns {boolean}
 */
function isString(target) {
    return isType(target, 'String');
}

/**
 * @description: checks if the target is a valid boolean.
 * @param {*} target 
 * @returns {boolean}
 */
function isBoolean(target) {
    return isType(target, 'Boolean');
}

/**
 * @description: checks if the target is a valid function.
 * @param {*} target 
 * @returns {boolean}
 */
function isFunction(target) {
    return isType(target, 'Function');
}

/**
 * 
 * @param {*} target 
 * @returns {boolean}
 */
function isObject(target) {
    return isType(target, 'Object');
}

/**
 * @description: checks if the target is an array.
 * @param {*} target 
 * @returns {boolean}
 */
function isArray(target) {
    return isType(target, 'Array');
}

/**
 * @description: checks if the target is null.
 * @param {*} target 
 * @returns {boolean}
 */
function isNull(target) {
    return target === null;
}

/**
 * @description: checks if the target is undefined.
 * @param {*} target 
 * @returns {boolean}
 */
function isUndefined(target) {
    return target === undefined;
}

/**
 * @description: checks if the target is a symbol.
 * @param {*} target 
 * @returns 
 */
function isSymbol(target) {
    return isType(target, 'Symbol');
}

/**
 * @description: checks if the target is a BigInt.
 * @param {*} target 
 * @returns {boolean}
 */
function isBigInt(target) {
    return isType(target, 'BigInt');
}

/**
 * @description: checks if the target is a Date object.
 * @param {*} target 
 * @returns {boolean}
 */
function isDate(target) {
    return isType(target, 'Date');
}

/**
 * @description: checks if the target is a RegExp object.
 * @param {*} target 
 * @returns {boolean}
 */
function isRegExp(target) {
    return isType(target, 'RegExp');
}

/**
 * @description: checks if the target is an Error object.
 * @param {*} target 
 * @returns {boolean}
 */
function isError(target) {
    return isType(target, 'Error');
}

/**
 * @description: checks if the target is a Map object.
 * @param {*} target 
 * @returns {boolean}
 */
function isMap(target) {
    return isType(target, 'Map');
}

/**
 * @description: checks if the target is a Set object.
 * @param {*} target 
 * @returns {boolean}
 */
function isSet(target) {
    return isType(target, 'Set');
}

/**
 * @description: checks if the target is a WeakMap object.
 * @param {*} target 
 * @returns {boolean}
 */
function isWeakMap(target) {
    return isType(target, 'WeakMap');
}

/**
 * @description: checks if the target is a WeakSet object.
 * @param {*} target 
 * @returns {boolean}
 */
function isWeakSet(target) {
    return isType(target, 'WeakSet');
}

/**
 * @description: checks if the target is an ArrayBuffer.
 * @param {*} target 
 * @returns {boolean}
 */
function isArrayBuffer(target) {
    return isType(target, 'ArrayBuffer');
}

/**
 * @description: checks if the target is a TypedArray (like Int8Array, Uint8Array, etc.).
 * @param {*} target 
 * @returns {boolean}
 */
function isTypedArray(target) {
    return isType(target, 'TypedArray');
}

/**
 * @description: checks if the target is a DataView.
 * @param {*} target 
 * @returns {boolean}
 */
function isDataView(target) {
    return isType(target, 'DataView');
}

/**
 * @description: checks if the target is a Promise.
 * @param {*} target 
 * @returns {boolean}
 */
function isPromise(target) {
    return typeof target.then === 'function' && isType(target, 'Promise');
}


module.exports = {
    isType,
    isNumber,
    isString,
    isBoolean,
    isFunction,
    isObject,
    isArray,
    isNull,
    isUndefined,
    isSymbol,
    isBigInt,
    isDate,
    isRegExp,
    isError,
    isMap,
    isSet,
    isWeakMap,
    isWeakSet,
    isArrayBuffer,
    isTypedArray,
    isDataView,
    isPromise
}