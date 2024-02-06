const dns = require('dns')

let url = 'www.facebook.com'

//dns.lookup(domain,callback)
dns.lookup(url, function (err,addr,fam) {
    if(err) console.log(err)

    console.log(`address =`, addr)
    console.log(`family =`, fam)
 

//hosting location
 dns.lookupService(addr,80, function (err,host,ser){
    if(err) console.log(err)
    console.log(`host =`, host)
console.log(`service =`,ser)
 })

})


/* address = 2a03:2880:f184:81:face:b00c:0:25de
family = 6
host = edge-star-mini6-shv-01-tir3.facebook.com
service = http */

/* E:\BE PRATICAL\Nodejs\modules\dns>node p1.js
address = 163.70.138.35
family = 4
host = edge-star-mini-shv-01-tir3.facebook.com
service = http */