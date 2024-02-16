const express = require('express')
const path = require('path')
const PORT = 4562

const app = express()

app.use(express.urlencoded({ extended: true })) //url encoded type of data
app.use(express.json()) //to make app to receive json format of data

app.get('/', function (req,res) {
    return res.status(200).sendFile(path.resolve(__dirname,'./public/index.html'))
})
app.get('/contact', function (req,res) {
    return res.status(200).sendFile(path.resolve(__dirname,'./public/contact.html'))
})

app.post(`/api/user`, function (req,res) {
    const data = req.body
    return res.status(200).json({ status:true, data})
})

app.all(`*`, function (req,res){
    res.status(404).sendFile(path.resolve(__dirname,'./public/pnf.html'))
})

app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})