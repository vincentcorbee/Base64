/**
 *
 * @param {string} input
 * @param {string} table - A base64 encoding table.
 * @returns A base64 encoded string without padding.
 */
const encode = (input, table) => {
  const length = input.length
  let i = 0
  let base64 = ''

  while (i < length) {
    const num =
      (input.charCodeAt(i++) << 16) | (input.charCodeAt(i++) << 8) | input.charCodeAt(i++)

    base64 +=
      table[(num >>> 18) & 63] +
      table[(num >>> 12) & 63] +
      table[(num >>> 6) & 63] +
      table[num & 63]
  }

  return base64
}

module.exports = encode
