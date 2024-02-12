const http = require('http')
const fs = require('fs')
const PORT = 6500

http.createServer(function(req,res) {
    const stream = fs.createReadStream('./big.txt')

    stream.on('open', () => {
        stream.pipe(res)
    })

    stream.on('error', (err) => {
        res.end(err)
    })
}).listen(PORT, () => {
    console.log(`server running @ https://localhost:${PORT}`)
})