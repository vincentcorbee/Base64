/**
 *
 * @param {string} base64
 * @param {number} length - Length of the source string.
 * @returns A base64 string with padding.
 */
const padBase64 = (base64, length) => {
  const pad = length % 3

  switch (pad) {
    case 0:
      // 0 bits remaning
      return base64
    case 1:
      // 8 bits remaining
      return `${base64.substring(0, base64.length - pad - 1)}==`
    case 2:
      // 16 bits remaining
      return `${base64.substring(0, base64.length - 1)}=`
  }
}

module.exports = padBase64
