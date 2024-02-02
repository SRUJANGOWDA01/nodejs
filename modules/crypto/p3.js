//cipher.final()
const crypto = require('crypto')

//input
const password = 'test123$'

//algo -> aes = advance encryption std 128 192 256
const algo = 'aes-192-cbc'
//key
const key = crypto.scryptSync(password,'salt',24)

//static iv
const iv = Buffer.alloc(16,0);

let cipher = crypto.createCipheriv(algo,key,iv)

let value = cipher.final('hex')

console.log(`output =`,value)

/* output = a5456e4af3df4618bb795ea987bc97c6 */