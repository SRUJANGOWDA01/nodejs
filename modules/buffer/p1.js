

//buffer module => memory allocation , it stores the data in ascii format -> 2 digit hex value

const buf = Buffer.alloc(4) // allocate buffer memory
console.log('safe memory =', buf)

/* safe memory = <Buffer 00 00 00 00> */


const buf1 = Buffer.allocUnsafe(4) // un safe buffer
console.log(`un safe memory =`, buf1)

/* un safe memory = <Buffer 00 00 00 00> */

//from => decodes the unicode characters into ascii
const buf2 = Buffer.from('Be-practical')
console.log(`from =`, buf2)
console.log(`from =`, buf2.toString())

/* from = <Buffer 42 65 2d 70 72 61 63 74 69 63 61 6c>
   from = Be-practical */


// concat
const a1 = Buffer.from("Welcome to  ")
const a2 = Buffer.from(" node js server script.")

const res = [a1,a2]
const out = Buffer.concat(res)

console.log(`output =`, out)
console.log(`output =`, out.toString())

/* output = <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 20 20 6e 6f 64 65 20 6a 73 20 73 65 72 76 65 72 20 73 63 72 69 70 74 2e>
output = Welcome to   node js server script. */