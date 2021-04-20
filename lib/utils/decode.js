const getIndex = require('./get-index')
const verifyEncoding = require('./verify-encoding')
const getChar = require('./get-char')
const verifyPadding = require('./verify-padding')

/**
 *
 * @param {string} base64
 * @param {string} table - A base64 encoding table.
 * @returns A base64 decoded string.
 */
const decode = (base64, table) => {
  if (!verifyPadding(base64)) {
    throw new Error(`The string is not correctly encoded.`)
  }

  const length = base64.length
  let i = 0
  let result = ''

  while (i < length) {
    // Create number constructed of 4 * 6 bit characters.
    let num =
      ((table.indexOf(verifyEncoding(base64[i], table)) & 63) << 18) |
      ((table.indexOf(verifyEncoding(base64[i + 1], table)) & 63) << 12) |
      ((getIndex(base64[i + 2], table) & 63) << 6) |
      (getIndex(base64[i + 3], table) & 63)

    // Create output result constructed of 3 * 8 bit characters.
    result += getChar(num >> 16) + getChar(num >> 8) + getChar(num)

    i += 4
  }

  return result
}

module.exports = decode
