const file = require('fs')

const a = file.readFile('./Built-in-Modules/content/first.txt', 'utf-8', function(error,item){
    if(error){
        console.log(error)
        return
    }
    console.log(item)

})