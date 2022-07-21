const fs = require('fs')
const path = require('path')

/**
 * readFile
 * params1: url,
 * params2: content,
 * params2: options
 * params3: callback
 */
fs.writeFile(path.join(__dirname , './file/1.txt') , 'newAddContent' ,'utf-8', function (err) {
    console.log(err)
})

fs.readFile(path.join(__dirname , './file/1.txt') ,'utf-8', function (err,dataMsg) {
    console.log(dataMsg)
})
