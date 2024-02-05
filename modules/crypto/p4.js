const crypto = require ('crypto')

const algo = 'aes-256-cbc' //algo
const key = crypto.randomBytes(32) //key
const iv = crypto.randomBytes(16) //iv => initialization vector

function encryptData(data) {
    let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv) //cipher
      let res1 = cipher.update(data) // update cipher + data
      res1 = Buffer.concat([res1,cipher.final()]) // concat cipher + data

      return {
        iv : iv.toString('hex'),
        out: res1.toString('hex')
      }
}

let out1 = encryptData('Test123$#43')
console.log(`encrypted = `, out1)

/* Decrypt */

function decryptData(data) {
    let iv1 = Buffer.from(data.iv, 'hex') //iv input
    let inp = Buffer.from(data.out, 'hex') //

    let dec = crypto.createDecipheriv(algo,Buffer.from(key),iv1) //cipher
    let decOut = dec.update(inp) //update cipher + data
       decOut = Buffer.concat([decOut, dec.final()]) //concat the cipher + data

       return decOut.toString()
}

let out2 = decryptData(out1)
console.log(`decrypted data = `, out2)