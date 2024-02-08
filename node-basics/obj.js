let user = {
    name : "John",
    email : "john@gmail.com",
    age : 23
}

const calc = {
    sum : (a,b) => {
        return a + b
    },
    product : function(a,b) {
        console.log(`product =`, a * b)
    }
}

module.exports = {user , calc}