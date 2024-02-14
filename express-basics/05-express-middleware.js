//middleware's are express controller's will be included after the path and before the main_controller
//middleware are having three params => req,res,next

//app.get(path,middleware, main_controller)

const express = require('express')
const logger = require('./middleware/logger')
const PORT = 4552

const app = express()

app.get(`/`, function(req,res) {
    return res.status(200).json({ msg: `Welcome to home`})
})
app.get(`/api/time`, logger, function (req,res) {
    const cTime = req.myTime
    return res.status(200).json({ msg: `time contoller`, cTime})
})

app.listen(PORT,() => {
    console.log(`server is running @ https://localhost:${PORT}`)
})