const { decode } = require('./utils/')
const { base64Urlable } = require('./tables')

/**
 *
 * @param {string} input
 * @returns A base64Url decoded string.
 */
const base64UrlDecode = input => decode(input, base64Urlable)

module.exports = base64UrlDecode
