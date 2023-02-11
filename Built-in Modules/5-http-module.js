const http = require('http')

const sv = http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('Welcome to our home page-> and this is completely made on backend')
    }
    if(req.url === '/about'){
        res.end('This is the about page')
    }

    res.end('Sorry we dont have a contact page')

})

sv.listen(5000) 