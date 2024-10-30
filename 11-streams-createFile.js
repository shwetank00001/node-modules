const  file = require('fs')

for (let i = 0; i < 1000; i++){

const a = file.writeFileSync('./Built-in-Modules/content/big.txt', `hello, ${i}`, 'utf8', {flag : 'a'})
}

