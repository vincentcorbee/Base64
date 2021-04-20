const { decode } = require('./utils/')
const { base64Table } = require('./tables')

/**
 *
 * @param {string} input
 * @returns A base64 decoded string.
 */
const base64Decode = input => decode(input, base64Table)

module.exports = base64Decode
