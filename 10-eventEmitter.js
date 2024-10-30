const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', function(name,age){
    console.log(`data recieved with name:${name} and age as: ${age}`)
})

customEmitter.emit('response', 'John' , 34)