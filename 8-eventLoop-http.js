const sv = require('http')

const a = sv.createServer(function(req,res){
    console.log('user requestin')
    res.end('hello world 11323')
}
)

const f= a.listen(5000,() => {
    console.log('server on port')
})