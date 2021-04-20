/**
 *
 * @param {url} base64
 * @returns A boolean indicating if the base64 string is properly padded.
 */
const verifyPadding = base64 => {
  const pad = (base64.match(/=+$/g) || [''])[0].length
  const length = base64.length - pad

  switch (length % 4) {
    case 0:
      return true
    case 2:
      return pad === 2
    case 3:
      return pad === 1
    default:
      return false
  }
}

module.exports = verifyPadding
