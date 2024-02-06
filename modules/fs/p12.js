const fs = require('fs')

function getCurrentFileNames() {
    fs.readdirSync(__dirname).forEach(item => {
        console.log(item)
    })
}
getCurrentFileNames()

/* docs
images
myfile.txt
p1.js
p10.js
p11.js
p12.js
p2.js
p3.js
p4.js
p5.js
p6.js
p7.js
p8.js
p9.js */