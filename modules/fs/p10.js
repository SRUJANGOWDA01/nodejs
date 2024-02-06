const fs = require('fs')
const path = require('path')

//__dirname => global variable -> return the folder path

fs.mkdir(path.join(__dirname, "docs"), (err) => {
    if(err) console.log(err)
    console.log('new directory created')
})

/* new directory created */

/* [Error: EEXIST: file already exists, mkdir 'E:\BE PRATICAL\Nodejs\modules\fs\docs'] {
  errno: -4075,
  code: 'EEXIST',
  syscall: 'mkdir',
  path: 'E:\\BE PRATICAL\\Nodejs\\modules\\fs\\docs'
}
new directory created */