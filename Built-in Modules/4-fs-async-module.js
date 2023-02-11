// we use FS to interact with the files

const fs = require('fs')

console.log('start')

const  first = fs.readFile('./content/first.txt', 'utf-8', function(item,result){
      if(item){
        console.log(item)
        return
      }
      const fst  = result
      const second = fs.writeFile('./content/second.txt' , 'utf-8', function(item, result){
        if(item){
            console.log(item)
        }   

        const  sec = result
        const third = fs.readFile('./content/second.txt' , 'utf-8', function(item, result){
            if(item){
                console.log(item)
            }   
            console.log('done with task')
        })


    })
})

console.log('starting next')