const dns = require('dns')

//return ip address of the current host
console.log(dns.getServers())

//resolve any
dns.resolveAny('www.flipkart.com', (err,ret) => {
    console.log('records = %j', ret);
})

/* [ '192.168.106.30' ]
records = [{"value":"flipkart.com","type":"CNAME"}] */