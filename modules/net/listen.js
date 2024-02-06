const net = require('net')

//client
const client = net.connect({ port : 1886}, () => {
    console.log(`connected to server`)
})

//data event
client.on('data', (output) => {
    console.log(`output =`, output.toString())
})

//end event => to stop the server
client.on('end', () => {
    console.log(`server disconnected`)
})

/* connected to server
output = My new message is here
server disconnected */