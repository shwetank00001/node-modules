
const names = require('./3-names')
const hello = require('./4-namesFunc')

const alternative = require('./6-alternative-for-export')

const sum = require('./7-mind-grenade-1')

hello("shwetank")
hello(names.fname)
hello(names.sname)  

sum()
console.log(alternative)

