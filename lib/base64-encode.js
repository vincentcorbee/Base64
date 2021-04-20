const { base64Table } = require('./tables')
const { padBase64, encode } = require('./utils')

/**
 *
 * @param {string} input
 * @returns A base64 encoded string.
 */
const base64Encode = input => padBase64(encode(input, base64Table), input.length)

module.exports = base64Encode
