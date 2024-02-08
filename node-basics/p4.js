const http = require('http')

//router path
const server = http.createServer(function(req,res){
    let url = req.url // read router path
    // console.log(`url =`, url)
    res.end(`<h1> my url is = ${url} </h1>`)
})

server.listen(4000,function() {
    console.log(`server is running @ http://localhost:4000`)
})