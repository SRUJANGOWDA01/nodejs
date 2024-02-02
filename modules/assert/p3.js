const assert = require('assert')


const x = {
    name : "john"
}

const y = [
    {
        name : "david"
    }
]

const z = [
    {
        name : "david"
    }
]

//notDeepStrictEqual => Validates type,structure, and value

assert.notDeepStrictEqual(y,z)