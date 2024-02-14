const express = require('express')
const products = require('./data/products')
const PORT = 3435

const app = express()

app.get('/', function(req,res) {
    res.status(200).json({ msg: "index message"})
})

// reading all products
app.get('/api/products', function(req,res) {
    res.status(200).json({ success: true, length: products.length, products})
})

//single product => ref to the controller -> 
//router params
app.get(`/api/product/:proId/price/:pr`, function (req,res) {
    let out = req.params
    res.status(200).json({ success: true, out})
})

app.get(`/api/product/:proId`, function(req,res) {

    let single = products.find(item => item.id == req.params.proId)
    if(!single) return res.status(400).json({ success: false, msg: `product id doesn't exists.`})

    res.status(200).json({ success: true, single})
})

//queries
app.get(`/api/single`, function(req,res) {
    let data = req.query

    let single = products.find(item => item.id == data.id)
    if(!single) return res.status(400).json({ success: false, msg: `product id doesn't exists`})

    res.status(200).json({ success: true, data, single })
})


app.all(`*`, function(req,res) {
    res.status(404).json({ msg: "Requested Path Not found"})
})

app.listen(PORT, function(){ 
    console.log(`server is running @ http://localhost:${PORT}`)
})