const util = require('util')

//template
let msgTemplate = `Hi %s, welcome to %s and duration is %d months`;

/* %s => string , %d => number */

let u1 = util.format(msgTemplate,"John","JavaScript",1.3);
let u2 = util.format(msgTemplate,"Sony","Java",2.5);

console.log(`u1 =`,u1)
console.log(`u2 =`,u2)

/* u1 = Hi John, welcome to JavaScript and duration is 1.3 months
u2 = Hi Sony, welcome to Java and duration is 2.5 months */