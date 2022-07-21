const fs = require('fs')
const path = require('path')

/**
 * readFile
 * params1: url,
 * params2: options
 * params3: callback
 */
fs.readFile('./file/1.txt' ,'utf-8', function (err,dataMsg) {
    const filePath = (path.join(__dirname , './file/1.txt'))
    console.log(path.basename(filePath))
    console.log(path.extname(filePath))
    console.log(err , dataMsg)
})
