const http = require('http')

const sv = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('this is home')
    }
    if(req.url === '/about'){
        res.end('this is about page')
    }
    res.end('Error Not Found')
})

sv.listen(5000, function(){
    console.log('sv is live- >')
})