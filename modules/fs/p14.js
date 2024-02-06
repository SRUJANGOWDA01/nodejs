const fs = require('fs')

fs.rename('./renames.txt', 'new.txt', (err)=> {
    if(err) console.log(err)
    console.log(`file name changed sucess`)
})