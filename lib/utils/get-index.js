const verifyEncoding = require('./verify-encoding')

/**
 *
 * @param {string} char
 * @param {string} table - A base64 encoding table.
 * @returns A number representing the character.
 */
const getIndex = (char, table) =>
  !char || char === '=' ? 0 : table.indexOf(verifyEncoding(char, table))

module.exports = getIndex
