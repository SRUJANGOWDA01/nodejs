//read file
const fs = require('fs')

//sync read
let data = fs.readFileSync('./myfile.txt')

   console.log(`sync read =`, data) //buffer
   console.log(`sync read =`, data.toString()) //string

   /* sync read = <Buffer 54 68 69 73 20 69 73 20 6d 79 20 66 69 72 73 74 20 6c 69 6e 65 20 6f 66 20 63 6f 6e 74 65 6e 74 0d 0a 74 68 69 73 20 69 73 20 73 65 63 6f 6e 64 20 6c ... 117 more bytes>
sync read = This is my first line of content
this is second line of content
welcome to nodejs
we are working readline module
it reads the data line by line
it's nodejs module
 */