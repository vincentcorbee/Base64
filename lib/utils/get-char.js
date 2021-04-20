/**
 *
 * @param {number} num
 * @returns A character or an empty string.
 */
const getChar = num => {
  const code = num & 0xff

  return code ? String.fromCharCode(code) : ''
}

module.exports = getChar
