const path = require('path')

const filePath = path.resolve(__dirname)
console.log(`resolve =`, filePath)

const filePath1 = path.resolve(__dirname, 'docs', 'pdf','test.pdf') //absolute path
console.log(`resolve =`, filePath1)

const filePath2 = path.join(__dirname,'/docs','/pdf','/test.pdf')
console.log(`join =`,filePath2)

const filePath3 = path.resolve('p1.js')
console.log(`resolve file path =`, filePath3)

const filePath4 = path.extname('p1.js')
console.log(`ext name =`, filePath4)

/* resolve = E:\BE PRATICAL\Nodejs\modules\path
resolve = E:\BE PRATICAL\Nodejs\modules\path\docs\pdf\test.pdf
join = E:\BE PRATICAL\Nodejs\modules\path\docs\pdf\test.pdf
resolve file path = E:\BE PRATICAL\Nodejs\modules\path\p1.js
ext name = .js */