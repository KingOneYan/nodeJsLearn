const http = require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer()

// 绑定访问事件
server.on('request',function (req,res){
    const url = req.url
    const method = req.method
    const strEnd = `哈哈, your url is ${url} , your method is ${req.method}`
    // res.setHeader('Content-Type','text/html; charset=utf-8')
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    // 4.1 根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 读取失败，向客户端响应固定的“错误消息”
        if (err) return res.end('404 Not found.')
        // 4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
    // res.end(strEnd)
})

//启动服务器
server.listen(80,function (){
    console.log('server running')
})
