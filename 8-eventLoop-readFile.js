const fs = require('fs')
console.log('started')

const sv = fs.readFile('./Built-in-Modules/Content/first.txt', 'utf8', function(req,res){
    if(req){
        console.log(req)
        return
    }
    console.log(res)
    console.log('This ran after Reading')
})

console.log('Running')