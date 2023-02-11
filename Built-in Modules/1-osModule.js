const os = require('os')

// info about current browser

const user = os.uptime()
const user1 = os.userInfo()

console.log(user)
console.log(user1)

const currentOS = {
    name : os.type(),
    release: os.release(),
    upstime : os.uptime(),
    memory : os.totalmem(),
    free: os.freemem()

}

console.log(currentOS)