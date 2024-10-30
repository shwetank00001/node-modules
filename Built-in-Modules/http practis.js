const http = require('http')

const sv = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('This is home')
    }
    if(req.url === '/about'){
        res.end('This is about')
    }
    if(req.url === '/contact'){
        res.end('This is contact')
    }
})

sv.listen(5000)