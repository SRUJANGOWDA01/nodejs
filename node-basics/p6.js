//events
// custom events
// .on(name,callback) -> define the events block
// .emit(name) -> invoke the event

const EventEmittter = require('events')
const custom = new EventEmittter()

custom.on('display', () => {
    console.log(`welcome to node events`)
})

custom.emit('display')

custom.on('sum', function(a,b) {
    console.log(`sum =`, a + b)
})

custom.emit('sum',10,24)

/* welcome to node events
sum = 34 */