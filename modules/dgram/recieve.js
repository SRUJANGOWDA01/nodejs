const dgram = require('dgram')
const socket = dgram.createSocket('udp4')
const assert = require('assert')

//node event
socket.on('message', function (msg,err) {
    if(err) console.log(err)

    console.log('message =', msg) //buffer
    console.log('message =', msg.toString()) //string

})

socket.bind(5000)

/* { address: '127.0.0.1', family: 'IPv4', port: 57441, size:
 17 }
message = <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 6a 73>
message = welcome to nodejs
 */