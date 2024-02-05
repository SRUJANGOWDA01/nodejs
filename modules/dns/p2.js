const dns = require('dns')
const { json } = require('stream/consumers')

dns.resolve('www.facebook.com', function (err,data) {
    if(err) console.log(err)
    data.forEach(item => {
        dns.reverse(item, (err,host) => {
            if(err) console.log(err)
            console.log(`reverse dns = ${item}: ${JSON.stringify(host)}`)
        })
    })
})

dns.resolve6('www.facebook.com', function (err,data) {
    if(err) console.log(err)
    data.forEach(item => {
dns.reverse(item, (err,host) => {
         if(err) console.log(err)
         console.log(`reverse dns = ${item}: ${JSON.stringify(host)}`)
    })
  })
})

/* reverse dns = 2a03:2880:f184:81:face:b00c:0:25de: ["edge-star-mini6-shv-01-tir3.facebook.com"]
reverse dns = 163.70.138.35: ["edge-star-mini-shv-01-tir3.facebook.com"]
 */