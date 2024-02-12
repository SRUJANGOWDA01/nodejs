const http = require('http')
const PORT = 5656

const server = http.createServer(function(req,res) {

    //req.method - http request type
    //req.url - to read url path from address bar

    console.log(`method = ${req.method} and url = ${req.url}`)
})

server.listen(PORT, () => {
    console.log(`server is running @ https://localhost:${PORT}`)
})