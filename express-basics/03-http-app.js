const express = require('express')
const path = require('path')
const PORT = 3243

const app = express()

//app.get() -> is used to handle http get request
app.get('/', function(req,res) {
    return res.sendFile(path.resolve(__dirname, './public/index.html'))
})
app.get('/about', function(req,res) {
    return res.sendFile(path.resolve(__dirname, './public/about.html'))
})
app.get('/contact', function(req,res) {
    return res.sendFile(path.resolve(__dirname, './public/contact.html'))
})

//app.all() => default controller
app.all(`*`, function(req,res) {
    res.status(404).sendFile(path.resolve(__dirname, './public/pnf.html'))
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})