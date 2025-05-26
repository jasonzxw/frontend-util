/**
 * @description Pauses execution for a specified number of milliseconds.
 * @param {*} ms 
 * @returns {Promise}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    sleep
}