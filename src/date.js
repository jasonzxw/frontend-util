/**
 * @description This file contains functions to get the current local date and time in various formats.
 * @returns 
 */
function getCurrentLocalDateTime() {
    const date = new Date();
    return date.toLocaleString();
}

/**
 * @description This function returns the specific local date.
 * @param {*} date 
 * @returns 
 */
function getSpecificLocalDateTime(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleString(undefined, options);
}


/**
 * @description This function returns the current local date.
 * @returns {string} Current date in the format YYYY-MM-DD
 */
function getCurrentLocalDate() {
    const date = new Date();
    return date.toLocaleDateString();
}

/**
 * @description This function returns the specific date in the format YYYY/MM/DD.
 * @param {*} date 
 * @returns 
 */
function getSpecificLocalDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
}

/**
 * @description This function returns the current local time.
 * @returns {string} Current time in the format HH:MM:SS
 */
function getCurrentLocalTime() {
    const date = new Date();
    return date.toLocaleTimeString();
}

/**
 * @description This function returns the specific time in the format HH:MM:SS.
 * @param {*} date 
 * @returns 
 */
function getSpecificTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
}

console.log(getSpecificTime(new Date()));

/**
 * 
 * @returns {string} Current  UTC date
 */
function getUtcTime() {
    const date = new Date();
    return date.toUTCString();
}

/**
 * @description This function returns the specific format date.
 * @param {*} date 
 * @param {*} format 
 * @returns 
 */
function getFormattedDate(date, format) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    return [
        year,
        month < 10 ? '0' + month : month,
        day < 10 ? '0' + day : day
    ].join(format);
}

/**
 * @description This function returns the specific format time.
 * @param {*} date 
 * @param {*} format 
 * @returns 
 */
function getFormattedTime(date, format) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return [
        hours < 10 ? '0' + hours : hours,
        minutes < 10 ? '0' + minutes : minutes,
        seconds < 10 ? '0' + seconds : seconds
    ].join(format);
}

/**
 * @description This function returns the specific format date and time.
 * @param {*} date 
 * @param {*} format 
 * @returns 
 */
function getSpecificDateTime(date, format) {
    return getFormattedDate(date, format) + ' ' + getFormattedTime(date, format);
}

/**
 * @description This function returns a relative time string based on the given date.
 * @param {*} date 
 * @returns {string} Relative time string like "2 days ago", "1 hour ago", etc.
 */
function getRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        min: 60,
        sec: 1,
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
        const count = Math.floor(diffInSeconds / seconds);
        if (count >= 1) {
            return `${count}${count > 1 ? unit + 's' : unit} ago`;
        }
    }
    return 'just now';
}

/**
 * @description This function calculates the difference between two dates in the specified unit.
 * @param {*} date1 
 * @param {*} date2 
 * @param {*} unit 'day' |'hour'|'minute'|'second'|'year'|'month' 
 * @returns {number} Difference in the specified unit
 */
function dateDiff(date1, date2, unit = 'day') {
    const diffInMs = Math.abs(date2 - date1);
    switch (unit) {
        case 'year':
            return date2.getFullYear() - date1.getFullYear();
        case 'month':
            return (date2.getFullYear() - date1.getFullYear()) * 12 +
                (date2.getMonth() - date1.getMonth());
        case 'day':
            return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        case 'hour':
            return Math.floor(diffInMs / (1000 * 60 * 60));
        case 'minute':
            return Math.floor(diffInMs / (1000 * 60));
        case 'second':
            return Math.floor(diffInMs / 1000);
        default:
            throw new Error('Invalid unit for date difference');
    }
}

/**
 * @description This function returns the first day of the month for a given date.
 * @param {*} date 
 * @returns 
 */
function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * @description This function returns the last day of the month for a given date.
 * @param {*} date 
 * @returns {number} Last day of the month
 */
function getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}



module.exports = {
    getCurrentLocalDateTime,
    getSpecificLocalDateTime,
    getCurrentLocalDate,
    getSpecificLocalDate,
    getCurrentLocalTime,
    getSpecificTime,
    getUtcTime,
    getFormattedDate,
    getFormattedTime,
    getSpecificDateTime,
    getRelativeTime,
    dateDiff,
    getFirstDayOfMonth,
    getLastDayOfMonth
}