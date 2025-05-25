/**
 * @description This function checks if the current environment is a React environment.
 * @returns Boolean
 */
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

module.exports ={
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
}


