const base64 = require('..')
const assert = require('assert').strict

assert.equal(base64.base64Decode(`Zm8=`), 'fo')

assert.equal(base64.base64Encode(''), '')
assert.equal(base64.base64Encode('f'), 'Zg==')
assert.equal(base64.base64Encode('fo'), 'Zm8=')
assert.equal(base64.base64Encode('foo'), 'Zm9v')
assert.equal(base64.base64Encode('foob'), 'Zm9vYg==')
assert.equal(base64.base64Encode('fooba'), 'Zm9vYmE=')
assert.equal(base64.base64Encode('foobar'), 'Zm9vYmFy')
