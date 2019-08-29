const md5 = require('md5')

/**
 * 
 * @param {String} string  any
 * @returns md5 hash of input parameter
 */
function generateMD5(string) {
    return md5(string)
}

module.exports = generateMD5