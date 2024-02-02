//hashing data

const crypto = require('crypto')

const hash = crypto.createHash('sha256'); // secured hash algo  128 256 512

let input = "test@gmail.com";

let data = hash.update(input).digest('base64url') // hex, binary, base64 , base64url

console.log('final digest', data)

/* hex = final digest 87924606b4131a8aceeeae8868531fbb9712aaa07a5d3a756b26ce0f5d6ca674
   binary = final digest F♠´‼→Îî®hS▼»↕ª z]:uk&Î]l¦t
   base64 = final digest h5JGBrQTGorO7q6IaFMfu5cSqqB6XTp1aybOD11spnQ=
   base64url = final digest h5JGBrQTGorO7q6IaFMfu5cSqqB6XTp1aybOD11spnQ
   
*/