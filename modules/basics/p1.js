//assert -> module used to handle run time server errors
//try catch => used to handle run time logical errors


/* Number */
console.log(`Welcome to nodejs`)

let x = 123
let y = 145

console.log(`product =`, x * y)

/* string  */

const z = "this is assert"
console.log(`string =`,z)

// Boolean

let stat = true
console.log(`boolean = `, stat)

/* for loop */
let colors = ['red','blue','green']
for(let i=0; i<colors.length; i++) {
    console.log(`color = `, colors[i])
}

// undefined
let txt //undefined
console.log(`txt = `,txt)

/* Object */
let user = {
    id : 1,
    name : "srujan",
    email : "srujan@gmail.com"
}
console.log(`user =`,user)
console.log(`name =`,user.name)
console.log(`email=`,user['email'])