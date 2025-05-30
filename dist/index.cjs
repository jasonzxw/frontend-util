'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * @description This file contains functions to get the current local date and time in various formats.
 * @returns 
 */

var date;
var hasRequiredDate;

function requireDate () {
	if (hasRequiredDate) return date;
	hasRequiredDate = 1;
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



	date = {
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
	};
	return date;
}

/**
 * @ description: This function takes an array of numbers and returns the nth largest number in the array.
 * @param {*} arr 
 * @param {*} n 
 * @returns 
 */

var number;
var hasRequiredNumber;

function requireNumber () {
	if (hasRequiredNumber) return number;
	hasRequiredNumber = 1;
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

	number = {
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
	};
	return number;
}

/**
 * @description: A function that generates a random integer between two values.
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */

var math;
var hasRequiredMath;

function requireMath () {
	if (hasRequiredMath) return math;
	hasRequiredMath = 1;
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

	math = {
	    getRandomInt,
	    getRandomFromArray,
	    getInteger,
	    getFloat,
	    radianToAngle,
	    angleToRadian,
	    getRadian
	};
	return math;
}

/**
 * @description This function checks if the current environment is a React environment.
 * @returns Boolean
 */

var env;
var hasRequiredEnv;

function requireEnv () {
	if (hasRequiredEnv) return env;
	hasRequiredEnv = 1;
	function isReactEnv(){
	    return typeof window !== 'undefined' && window.React !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Vue environment.
	 * @returns Boolean
	 */
	function isVueEnv(){
	    return typeof window !== 'undefined' && window.Vue !== undefined;
	}

	/**
	 * @description This function checks if the current environment is an Angular environment.
	 * @returns Boolean
	 */
	function isAngularEnv(){
	    return typeof window !== 'undefined' && window.ng !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Svelte environment.
	 * @returns Boolean
	 */
	function isSvelteEnv(){
	    return typeof window !== 'undefined' && window.Svelte !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Preact environment.
	 * @returns Boolean
	 */
	function isPreactEnv(){
	    return typeof window !== 'undefined' && window.Preact !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Solid environment.
	 * @returns {boolean}
	 */
	function isSolidEnv(){
	    return typeof window !== 'undefined' && window.Solid !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Lit environment.
	 * @returns {boolean}
	 */
	function isAlpineEnv(){
	    return typeof window !== 'undefined' && window.Alpine !== undefined;
	}

	/**
	 * @description This function checks if the current environment is a Node.js environment.
	 * @returns {boolean}
	 */
	function isNodeEnv(){
	    return typeof process !== 'undefined' && process.versions && process.versions.node;
	}

	/**
	 * @deascription This function checks if the current browser is mobile.
	 * @returns {boolean}
	 */
	function isMobile(){
	    return /Mobi|Android/i.test(navigator.userAgent);
	}
	/**
	 * @description This function checks the current browser name.
	 * @returns {string} The current browser name.
	 */
	function curBrowser(){
	    const userAgent = navigator.userAgent;
	    if (userAgent.indexOf("Chrome") > -1) {
	        return "Chrome";
	    } else if (userAgent.indexOf("Firefox") > -1) {
	        return "Firefox";
	    } else if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
	        return "Opera";
	    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
	        return "Internet Explorer";
	    }
	    return "Unknown";
	}


	/**
	 * @description This function checks if a document global variable is defined.
	 * @param {*} variable 
	 * @returns 
	 */
	function hasGlobalVariable(variable) {
	    return typeof window[variable] !== 'undefined';
	}

	env ={
	    isReactEnv,
	    isVueEnv,
	    isAngularEnv,
	    isSvelteEnv,
	    isPreactEnv,
	    isSolidEnv,
	    isAlpineEnv,
	    isNodeEnv,
	    isMobile,
	    curBrowser,
	    hasGlobalVariable
	};
	return env;
}

/**
 * @description Gets the height of the DOM.
 * @returns {number} The height of the DOM.
 */

var dom;
var hasRequiredDom;

function requireDom () {
	if (hasRequiredDom) return dom;
	hasRequiredDom = 1;
	function getDomHeight() {
	  return document.documentElement.scrollHeight;
	}

	/**
	 * @description Gets the width of the DOM.
	 * @returns {number} The width of the DOM.
	 */
	function getDomWidth() {
	  return document.documentElement.scrollWidth;
	}

	/**
	 * @description Gets the height of the viewport.
	 * @returns {number} The height of the viewport.
	 */
	function getViewportHeight() {
	  return window.innerHeight;
	}

	/**
	 * @description Gets the width of the viewport.
	 * @returns {number} The width of the viewport.
	 */
	function getViewportWidth() {
	  return window.innerWidth;
	}

	/**
	 * @description Gets the scroll top position of the document.
	 * @returns {number} The scroll top position of the document.
	 */
	function getScrollTop() {
	  return document.documentElement.scrollTop || document.body.scrollTop;
	}


	/**
	 * @description Gets the scroll left position of the document.
	 * @returns {number} The scroll left position of the document.
	 */
	function getScrollLeft() {
	  return document.documentElement.scrollLeft || document.body.scrollLeft;
	}

	/**
	 * @description Checks if the mouse is inside an element.
	 * @param {*} element 
	 * @param {*} x 
	 * @param {*} y 
	 * @returns {boolean}
	 */
	function mouseInElement(element, x, y) {
	  const rect = element.getBoundingClientRect();
	  return (
	    x >= rect.left &&
	    x <= rect.right &&
	    y >= rect.top &&
	    y <= rect.bottom
	  );
	}

	/**
	 * @description Gets the mouse position relative to an element.
	 * @param {*} element 
	 * @param {*} event 
	 * @returns {object}
	 */
	function mousePositioninElement(element, event) {
	  const { x, y } = getMousePosition(event);
	  if (!mouseInElement(element, x, y)) {
	    return null;
	  }
	  const rect = element.getBoundingClientRect();
	  return {
	    x: x - rect.left,
	    y: y - rect.top
	  };
	}

	/**
	 * @description Gets the mouse position in document.
	 * @param {*} event 
	 * @returns {object}
	 */
	function getMousePosition(event) {
	  const x = event.clientX || event.pageX;
	  const y = event.clientY || event.pageY;
	  return { x, y };
	}

	/**
	 * @description Gets the real height of an element.
	 * @param {*} element 
	 * @returns {number}
	 */
	function getRealElementHeight(element) {
	  return element.scrollHeight;
	}

	/**
	 * @description Gets the real width of an element.
	 * @param {*} element 
	 * @returns {number}
	 */
	function getRealElementWidth(element) {
	  return element.scrollWidth;
	}

	/**
	 * @description Checks if an element is visible.
	 * @param {*} el 
	 * @returns {boolean}
	 */
	function isElVisible(el) {
	  return el.offsetWidth > 0 && el.offsetHeight > 0;
	}

	/**
	 * @description Removes an element from the DOM.
	 * @param {*} el 
	 */
	function removeElement(el) {
	  if (el && el.parentNode) {
	    el.parentNode.removeChild(el);
	  }
	}

	/**
	 * @description Checks if an element has a child.
	 * @param {*} el 
	 * @param {*} child 
	 * @returns {boolean}
	 */
	function hasChild(el, child) {
	  if (el && child) {
	    return el.contains(child);
	  }
	  return false;
	}

	/**
	 * @description Checks if the document has focus.
	 * @returns {boolean}
	 */
	function documentHasFocus() {
	  return document.hasFocus();
	}

	/**
	 * @description Gets the position of an element in the document.
	 * @param {*} el 
	 * @returns {object}
	 */
	function getElementPosition(el) {
	  const rect = el.getBoundingClientRect();
	  return {
	    top: rect.top + window.scrollY,
	    left: rect.left + window.scrollX,
	    width: rect.width,
	    height: rect.height
	  };
	}


	/**
	 * @description Adds an event listener to a target.
	 * @param {*} target 
	 * @param {*} event 
	 * @param {*} callback 
	 * @param {*} options 
	 */
	function addEventListener(target, event, callback, options = {
	  capture: false,
	  once: false,
	  passive: false
	}) {
	  if (target.addEventListener) {
	    target.addEventListener(event, callback, options);
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + event, callback, options);
	  } else {
	    target['on' + event] = callback;
	  }
	}

	/**
	 * @description Downloads a file with the given data and file name.
	 * @param {*} data 
	 * @param {*} fileName 
	 */
	function downloadFile(data, fileName) {
	  const blob = new Blob([data], { type: 'application/octet-stream' });
	  const url = URL.createObjectURL(blob);
	  const a = document.createElement('a');
	  a.href = url;
	  a.download = fileName || 'download';
	  document.body.appendChild(a);
	  a.click();
	  document.body.removeChild(a);
	  URL.revokeObjectURL(url);
	}

	/**
	 * @description Downloads an image from an img element or canvas element.
	 * @param {*} imgElement 
	 * @param {*} fileName 
	 */
	function downloadImage(imgElement, fileName) {
	  const canvas = document.createElement('canvas');
	  canvas.width = imgElement.naturalWidth;
	  canvas.height = imgElement.naturalHeight;
	  const ctx = canvas.getContext('2d');
	  ctx.drawImage(imgElement, 0, 0);
	  canvas.toBlob((blob) => {
	    const url = URL.createObjectURL(blob);
	    const a = document.createElement('a');
	    a.href = url;
	    a.download = fileName || 'download.png';

	    document.body.appendChild(a);
	    a.click();
	    document.body.removeChild(a);
	    URL.revokeObjectURL(url);
	  }, 'image/png');
	}

	/**
	 * @description Downloads an image by its URL.
	 * @param {*} imgUrl 
	 * @param {*} fileName 
	 */
	function downloadImageByUrl(imgUrl, fileName) {
	  const img = new Image();
	  img.crossOrigin = 'anonymous'; // 允许跨域下载
	  img.onload = function () {
	    downloadImage(img, fileName);
	  };
	  img.src = imgUrl;
	}

	/**
	 * @description Uploads a file from an input element and calls a callback with the file data.
	 * @param {*} fileInput 
	 * @param {*} callback 
	 */
	function uploadFile(fileInput, callback) {
	  fileInput.addEventListener('change', function () {
	    const file = fileInput.files[0];
	    if (file) {
	      const reader = new FileReader();
	      reader.onload = function (e) {
	        callback(e.target.result, file.name);
	      };
	      reader.readAsDataURL(file);
	    }
	  });
	}

	/**
	 * @description Copies text to the clipboard.
	 * @param {*} text 
	 * @returns {Promise<boolean>}
	 */
	async function copyToClipboard(text) {
	  try {
	    if (navigator.clipboard && navigator.clipboard.writeText) {
	      await navigator.clipboard.writeText(text);
	      return true;
	    } else {
	      const textArea = document.createElement('textarea');
	      textArea.value = text;
	      textArea.style.position = 'fixed';
	      document.body.appendChild(textArea);
	      textArea.focus();
	      textArea.select();
	      const success = document.execCommand('copy');
	      document.body.removeChild(textArea);
	      return success;
	    }
	  } catch (err) {
	    console.error('Failed to copy text to clipboard:', err);
	    return false
	  }
	}

	/**
	 * @description Reads text from the clipboard.
	 * @returns {Promise<string>}
	 */
	async function readFromClipboard() {
	  try {
	    if (navigator.clipboard && navigator.clipboard.readText) {
	      return await navigator.clipboard.readText();
	    }else {
	      const textArea = document.createElement('textarea');
	      textArea.style.position = 'fixed';
	      document.body.appendChild(textArea);
	      textArea.focus();
	      document.execCommand('paste');
	      const text = textArea.value;
	      document.body.removeChild(textArea);
	      return text;
	    }
	  } catch (err) {
	    console.error('Failed to read from clipboard:', err);
	  }
	}

	dom = {
	  getDomHeight,
	  getDomWidth,
	  getViewportHeight,
	  getViewportWidth,
	  getScrollTop,
	  getScrollLeft,
	  mouseInElement,
	  mousePositioninElement,
	  getMousePosition,
	  getRealElementHeight,
	  getRealElementWidth,
	  isElVisible,
	  removeElement,
	  hasChild,
	  documentHasFocus,
	  getElementPosition,
	  addEventListener,
	  downloadFile,
	  downloadImage,
	  downloadImageByUrl,
	  uploadFile,
	  copyToClipboard,
	  readFromClipboard
	};
	return dom;
}

/**
 * @description Pauses execution for a specified number of milliseconds.
 * @param {*} ms 
 * @returns {Promise}
 */

var asyncUtil;
var hasRequiredAsyncUtil;

function requireAsyncUtil () {
	if (hasRequiredAsyncUtil) return asyncUtil;
	hasRequiredAsyncUtil = 1;
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




	asyncUtil = {
	    sleep,
	    executeAsyncFunctionsInOrder,
	    executeAsyncFunctionsConcurrently,
	    runWithConcurrency,
	    asyncify
	};
	return asyncUtil;
}

/**
 * @description Generates an array of numbers starting from a given number.
 * @param {*} n 
 * @param {*} start 
 * @returns {Array}
 */

var arr;
var hasRequiredArr;

function requireArr () {
	if (hasRequiredArr) return arr;
	hasRequiredArr = 1;
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

	arr = {
	    generateNumbers,
	    flattenArray,
	    removeDuplicates,
	    findAllIndexes,
	    isEmptyArray,
	    sortArrayAscending,
	    sortArrayDescending,
	    bubbleSort,
	    uniqueArray
	};
	return arr;
}

/**
 * @description: a simple type check utility
 * @param {*} target 
 * @param {*} type 
 * @returns 
 */

var is;
var hasRequiredIs;

function requireIs () {
	if (hasRequiredIs) return is;
	hasRequiredIs = 1;
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


	is = {
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
	};
	return is;
}

/**
 * @description Deep clones an object or array.
 * @param {*} target 
 * @returns 
 */

var obj;
var hasRequiredObj;

function requireObj () {
	if (hasRequiredObj) return obj;
	hasRequiredObj = 1;
	const { isObject } = requireIs();

	function deepClone(target) {
	    if (target === null || typeof target !== 'object') {
	        return target;
	    }

	    if (typeof target !== "object" || target === null) return target;
	    const clone = Array.isArray(target) ? [] : {};
	    for (const key in target) clone[key] = deepClone(target[key]);
	    return clone;
	}

	/**
	 * @description Shallow clones an object or array.
	 * @param {*} target 
	 * @returns 
	 */
	function shallowClone(target) {
	    if (target === null || typeof target !== 'object') {
	        return target;
	    }
	    return Array.isArray(target) ? [...target] : { ...target };
	}

	/**
	 * @description Checks if two objects or arrays are equal.
	 * @param {*} obj1 
	 * @param {*} obj2 
	 * @returns 
	 */
	function isEqual(obj1, obj2) {
	    if (obj1 === obj2) return true;
	    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;

	    const keys1 = Object.keys(obj1);
	    const keys2 = Object.keys(obj2);

	    if (keys1.length !== keys2.length) return false;

	    for (const key of keys1) {
	        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
	            return false;
	        }
	    }

	    return true;
	}

	/**
	 * @description inherits the prototype of a parent class for a child class.
	 * @param {*} child 
	 * @param {*} parent 
	 */
	function inheritPrototype(child, parent) {
	    child.prototype = Object.create(parent.prototype);
	    child.prototype.constructor = child;
	}

	/**
	 * @description Checks if an object is empty.
	 * @param {*} obj 
	 * @returns {boolean}
	 */
	function isEmptyObject(obj) {
	    return obj.constructor === Object && Object.keys(obj).length === 0;
	}

	/**
	 * @description Picks specific keys from an object.
	 * @param {*} obj 
	 * @param {*} keys 
	 * @returns {object}
	 */
	function pick(obj, keys) {
	    if (!isObject(obj)) return {};
	    if (!Array.isArray(keys)) throw new TypeError('keys must be an array');
	    return keys.reduce((acc, key) => {
	        if (obj.hasOwnProperty(key)) acc[key] = obj[key];
	        return acc;
	    }, {});
	}

	/**
	 * @description Omits specific keys from an object.
	 * @param {*} obj 
	 * @param {*} keys 
	 * @returns {object}
	 */
	function omit(obj, keys) {
	    if (!isObject(obj)) return {};
	    if (!Array.isArray(keys)) throw new TypeError('keys must be an array');
	    return Object.keys(obj).reduce((acc, key) => {
	        if (!keys.includes(key)) acc[key] = obj[key];
	        return acc;
	    }, {});
	}

	/**
	 * @description Converts an object to a query string.
	 * @param {*} obj 
	 * @returns {string}
	 */
	function objectToQueryString(obj) {
	    if (!isObject(obj)) return '';
	    return Object.entries(obj)
	        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
	        .join('&');
	}

	obj = {
	    deepClone,
	    shallowClone,
	    isEqual,
	    inheritPrototype,
	    isEmptyObject,
	    pick,
	    omit,
	    objectToQueryString
	};
	return obj;
}

/**
 * Queue implementation using an array
 */

var Queue_1;
var hasRequiredQueue;

function requireQueue () {
	if (hasRequiredQueue) return Queue_1;
	hasRequiredQueue = 1;
	class Queue{
	    constructor() {
	        this.items = [];
	    }
	    /**
	     * @description Adds an item to the queue.
	     * @param {*} item 
	     */
	    enqueue(item) {
	        this.items.push(item);
	    }

	    /**
	     * @description Removes the first item from the queue.
	     * @returns {*} The first item in the queue.
	     */
	    dequeue() {
	        return this.items.shift();
	    }
	    
	    /**
	     * @description Gets the first item in the queue without removing it.   
	     * @returns {*} The first item in the queue.
	     */
	    isEmpty() {
	        return this.items.length === 0;
	    }

	    /**
	     * @description Gets the first item in the queue without removing it.
	     * @returns {*} The first item in the queue.
	     */
	    size() {
	        return this.items.length;
	    }

	    /**
	     * @description Gets the first item in the queue without removing it.
	     * @returns {*} The first item in the queue.
	     */
	    has(item) {
	        return this.items.includes(item);
	    }

	    /**
	     * @description Executes all items in the queue.
	     * @param {*} callback 
	     */
	    execute(callback) {
	        while (!this.isEmpty()) {
	            const item = this.dequeue();
	            if(typeof item === 'function') {
	                item();
	            }else {
	                callback(item);
	            }
	        }
	    }
	    /**
	     * @description Clears ths Queus.
	     * @returns {*} void.
	     */
	    clear() {
	        this.items = [];
	    }
	}

	Queue_1 = {
	    Queue
	};
	return Queue_1;
}

/**
 * Stack implementation in JavaScript
 */

var Stack_1;
var hasRequiredStack;

function requireStack () {
	if (hasRequiredStack) return Stack_1;
	hasRequiredStack = 1;
	class Stack{
	    constructor(){
	        this.items = [];
	    }
	    /**
	     * @description Adds an item to the stack.
	     * @param {*} element 
	     */
	    push(element){
	        this.items.push(element);
	    }

	    /**
	     * @description Removes the last item from the stack.
	     * @returns {*} The last item in the stack.
	     */
	    pop(){
	        if(this.isEmpty()){
	            return "Underflow";
	        }
	        return this.items.pop();
	    }

	    /**
	     * @description Gets the last item in the stack without removing it.
	     * @returns {*} The last item in the stack.
	     */
	    peek(){
	        return this.items[this.items.length - 1];
	    }

	    /**
	     * @description Checks if the stack is empty.
	     * @returns {boolean} True if the stack is empty, false otherwise.
	     */
	    isEmpty(){
	        return this.items.length === 0;
	    }

	    /**
	     * @description Gets the size of the stack.
	     * @returns {number}
	     */
	    size(){
	        return this.items.length;
	    }

	    /**
	     * @description print stack.
	     * @returns 
	     */
	    printStack(){
	        let str = "";
	        for(let i = 0; i < this.size(); i++){
	            str += this.items[i] + " ";
	        }
	        return str;
	    }

	    /**
	     * @description Checks if the stack has an item.
	     * @param {*} callback 
	     */
	    excute(callback){
	        while(!this.isEmpty()){
	            const item = this.pop();
	            if(typeof item === "function"){
	                item();
	            }else (
	                callback(item)
	            );
	        }
	    }
	    /**
	     * @description Clears the stack.
	     */
	    clear(){
	        this.items = [];
	    }
	}

	Stack_1 ={
	    Stack
	};
	return Stack_1;
}

/**
 * Graph class implementation
 */

var Graph_1;
var hasRequiredGraph;

function requireGraph () {
	if (hasRequiredGraph) return Graph_1;
	hasRequiredGraph = 1;
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

	Graph_1 = {
	    Graph
	};
	return Graph_1;
}

/**
 * Node class
 */

var LinkedList_1;
var hasRequiredLinkedList;

function requireLinkedList () {
	if (hasRequiredLinkedList) return LinkedList_1;
	hasRequiredLinkedList = 1;
	class Node {
	    constructor(data) {
	        this.data = data;
	        this.next = null;
	    }
	}
	/**
	 * LinkedList class
	 */
	class LinkedList {
	    constructor() {
	        this.head = null;
	        this.size = 0;
	        this.current = null;
	    }

	    /**
	     * 
	     * @returns {Node} head of the linked list
	     */
	    getHead() {
	        return this.head;
	    }

	    /**
	     * 
	     * @returns {Node} current node of the linked list
	     */
	    getSize() {
	        return this.size;
	    }

	    /**
	     * @description Adds a node to the end of the linked list.
	     * @param {*} data 
	     */
	    add(data) {
	        const node = new Node(data);
	        if (this.head === null) {
	            this.head = node;
	        } else {
	            let current = this.head;
	            while (current.next) {
	                current = current.next;
	            }
	            current.next = node;
	        }
	        this.size++;
	    }

	    /**
	     * @description Remove node from the linked list.
	     * @param {*} data 
	     * @returns 
	     */
	    remove(data) {
	        if (this.head === null) {
	            return;
	        }
	        if (this.head.data === data) {
	            this.head = this.head.next;
	            this.size--;
	            return;
	        }
	        let current = this.head;
	        while (current.next && current.next.data !== data) {
	            current = current.next;
	        }
	        if (current.next) {
	            current.next = current.next.next;
	            this.size--;
	        }
	    }

	    /**
	     * @description Get the index of a node in the linked list.
	     * @param {*} data 
	     * @returns {number}
	     */
	    indexOf(data) {
	        let current = this.head;
	        let index = 0;
	        while (current) {
	            if (current.data === data) {
	                return index;
	            }
	            current = current.next;
	            index++;
	        }
	        return -1;
	    }

	    /**
	     * @description Check if the linked list contains a node.
	     * @param {*} data 
	     * @returns {boolean}
	     */
	    contains(data) {
	        let current = this.head;
	        while (current) {
	            if (current.data === data) {
	                return true;
	            }
	            current = current.next;
	        }
	        return false;
	    }

	    /**
	     * @description Get the node at the index.
	     * @param {*} index 
	     * @returns {Node} node at the index
	     */
	    get(index) {
	        if (index < 0 || index >= this.size) {
	            return null;
	        }
	        let current = this.head;
	        for (let i = 0; i < index; i++) {
	            current = current.next;
	        }
	        return current.data;
	    }

	    /**
	     * @description Insert a node at the index.
	     * @param {*} index 
	     * @param {*} data 
	     * @returns 
	     */
	    insert(index, data) {
	        if (index < 0 || index > this.size) {
	            return;
	        }
	        const node = new Node(data);
	        if (index === 0) {
	            node.next = this.head;
	            this.head = node;
	        } else {
	            let current = this.head;
	            for (let i = 0; i < index - 1; i++) {
	                current = current.next;
	            }
	            node.next = current.next;
	            current.next = node;
	        }
	        this.size++;
	    }

	    /**
	     * @description Clears the linked list.
	     */
	    clear() {
	        this.head = null;
	        this.size = 0;
	        this.current = null;
	    }


	}

	LinkedList_1 ={
	    LinkedList 
	};
	return LinkedList_1;
}

var Request;
var hasRequiredRequest;

function requireRequest () {
	if (hasRequiredRequest) return Request;
	hasRequiredRequest = 1;
	function get(url,params){
	    const xhr = new XMLHttpRequest();
	    const query = new URLSearchParams(params).toString();
	    const requestUrl = query ? `${url}?${query}` : url;
	    xhr.open('GET', requestUrl, true);
	    xhr.send();
	    return new Promise((resolve, reject) => {
	        xhr.onreadystatechange = () => {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    resolve(JSON.parse(xhr.responseText));
	                } else {
	                    reject(new Error(`Request failed with status ${xhr.status}`));
	                }
	            }else {
	                reject({ status: xhr.status, message: xhr.statusText });
	            }
	        };
	    });
	}

	function post(url, data) {
	    const xhr = new XMLHttpRequest();
	    xhr.open('POST', url, true);
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.send(JSON.stringify(data));
	    return new Promise((resolve, reject) => {
	        xhr.onreadystatechange = () => {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    resolve(JSON.parse(xhr.responseText));
	                } else {
	                    reject(new Error(`Request failed with status ${xhr.status}`));
	                }
	            }else {
	                reject({ status: xhr.status, message: xhr.statusText });
	            }
	        };
	    });
	}

	function del(url, params) {
	    const xhr = new XMLHttpRequest();
	    const query = new URLSearchParams(params).toString();
	    const requestUrl = query ? `${url}?${query}` : url;
	    xhr.open('DELETE', requestUrl, true);
	    xhr.send();
	    return new Promise((resolve, reject) => {
	        xhr.onreadystatechange = () => {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    resolve(JSON.parse(xhr.responseText));
	                } else {
	                    reject(new Error(`Request failed with status ${xhr.status}`));
	                }
	            }else {
	                reject({ status: xhr.status, message: xhr.statusText });
	            }
	        };
	    });
	}

	function put(url, data) {
	    const xhr = new XMLHttpRequest();
	    xhr.open('PUT', url, true);
	    xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.send(JSON.stringify(data));
	    return new Promise((resolve, reject) => {
	        xhr.onreadystatechange = () => {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    try{
	                        const data = JSON.parse(xhr.responseText);
	                        resolve(data);
	                    }catch(e){
	                        reject({ message: '响应数据解析失败' });
	                    }
	                } else {
	                    reject(new Error(`Request failed with status ${xhr.status}`));
	                }
	            }else {
	                reject({ status: xhr.status, message: xhr.statusText });
	            }
	        };
	    });
	}

	Request = {
	    get,
	    post,
	    del,
	    put
	};
	return Request;
}

var frontendUtil;
var hasRequiredFrontendUtil;

function requireFrontendUtil () {
	if (hasRequiredFrontendUtil) return frontendUtil;
	hasRequiredFrontendUtil = 1;
	const Date = requireDate();
	const Num = requireNumber();
	const math = requireMath();
	const env = requireEnv();
	const dom = requireDom();
	const AsyncUtil = requireAsyncUtil();
	const Arr = requireArr();
	const Obj = requireObj();
	const Is = requireIs();

	const Queue = requireQueue();
	const Stack = requireStack();
	const Grahp = requireGraph();
	const LinkedList = requireLinkedList();

	const Request = requireRequest();

	frontendUtil = {
	    ...Date,
	    ...Num,
	    ...math,
	    ...env,
	    ...dom,
	    ...AsyncUtil,
	    ...Arr,
	    ...Obj,
	    ...Is,

	    ...Queue,
	    ...Stack,
	    ...Grahp,
	    ...LinkedList,
	    ...Request
	};
	return frontendUtil;
}

var frontendUtilExports = requireFrontendUtil();
var index = /*@__PURE__*/getDefaultExportFromCjs(frontendUtilExports);

module.exports = index;
