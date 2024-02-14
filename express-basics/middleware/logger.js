const timeLog = function (req,res,next) {
    let curTime = new Date().toLocaleTimeString()
    //res.json({ curTime })
    req.myTime = curTime
    next()
}

module.exports = timeLog