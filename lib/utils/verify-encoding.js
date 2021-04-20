/**
 *
 * @param {string} char
 * @param {string} - The base64 encoding table.
 * @returns The input character or throws an error.
 */
const verifyEncoding = (char, table) => {
  if (!table.includes(char)) {
    throw new Error(`The string is not correctly encoded.`)
  }

  return char
}

module.exports = verifyEncoding
