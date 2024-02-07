const fs = require('fs')

const data = "All file system operations have synchronous,callback,and promise-based forms,and are accessible using both CommonJS and ES Modules (ES6)" 

fs.writeFileSync('./text2.txt',data)

console.log(`sync file write completed`)