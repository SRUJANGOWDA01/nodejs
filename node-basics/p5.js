const http = require('http')

//router path
const server = http.createServer(function(req,res) {
     let url = req.url //read router path

     switch(url) {
        case "/" : res.end(`<div>
                                <nav>
                                   <a href="/">Home</a>
                                   <a href="/about">About</a>
                                   <a href="/contact">Contact</a>
                                </nav>
                                <div>
                                    <h1>Home Page</h1>
                                </div>
                            </div>`);
                       break;
        case "/about" : res.end(`<div>
                                <nav>
                                   <a href="/">Home</a>
                                   <a href="/about">About</a>
                                   <a href="/contact">Contact</a>
                                </nav>
                                <div>
                                    <h1>About Page</h1>
                                </div>
                            </div>`);
                  break;
        default: res.end(`<div>
                                <nav>
                                   <a href="/">Home</a>
                                   <a href="/about">About</a>
                                   <a href="/contact">Contact</a>
                                </nav>
                                <div>
                                    <h1>Requested path not found</h1>
                                </div>
                            </div>`);
     }
})

server.listen(4000,function() {
    console.log(`server is running @ http://localhost:4000`)
})


/* [nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node p5.js` */