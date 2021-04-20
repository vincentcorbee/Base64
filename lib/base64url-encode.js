const { base64UrlTable } = require('./tables')
const { encode } = require('./utils')

/**
 *
 * @param {string} input
 * @returns A base64Url encoded string.
 */
const base64UrlEncode = input => encode(input, base64UrlTable)

module.exports = base64UrlEncode
