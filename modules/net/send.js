const net = require('net')

//server
const server = net.createServer(function(socket) {
    socket.end("My new message is here") //input
})

//node event -> error
server.on('error',(err) => {
    if(err) console.log(err)
})
//server listener
server.listen(() => {
    let address = server.address()
    console.log(`server port %`,address)
})

/*server port % { address: '::', family: 'IPv6', port: 1886 }
  */