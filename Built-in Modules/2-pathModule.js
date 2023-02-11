const path = require('path')
console.log(path.sep)

const flieLoc = path.join('/1-osModule.js')
console.log(flieLoc)

const base = path.basename('/1-osModule.js')
console.log(base)

const fullPath = path.resolve(__dirname,'/1-osModule.js')
console.log(fullPath)