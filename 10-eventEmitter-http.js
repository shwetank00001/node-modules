const http = require('http')

// Without using evenmt emitter
//  const sv = http.createServer(function(req,res){
//     if(req.url === '/'){
//         res.end('this is home')
//     }
// })


// using event emitterr api
const sv = http.createServer()
//emites req event
// we use on instance like event emitter
sv.on('request', function(req,res){
    res.end('Hello')
})

sv.listen(5000)

