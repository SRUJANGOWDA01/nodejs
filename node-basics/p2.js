const { x , y, z ,status } = require('./data')
const item = require('./data')
let { sum, product, mod } = require('./fun')

console.log(`x =`, x)

console.log(`y =`, item.y)
console.log(`z =`, item['z'])

let r1 = sum(x,y)
console.log(`sum =`,r1)

let r2 = product(x,y)
console.log(`product =`,r2)

let r3 = mod(x,y)
console.log(`mod =`, r3)