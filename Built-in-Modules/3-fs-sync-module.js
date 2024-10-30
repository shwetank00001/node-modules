// we use FS to interact with the files

const fs = require('fs')
console.log('start')

const  first = fs.readFileSync('./content/first.txt','utf-8')
const  second = fs.readFileSync('./content/second.txt','utf-8')
// const b = fs.writeFileSync

console.log(first,second)


const fileUsingWriteSync = fs.writeFileSync(
    './content/file-with-string',
     `Here is the result of both files:  ${first + second}`
)
console.log('done with task')
console.log('start the next task')