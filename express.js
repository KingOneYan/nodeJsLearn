const express = require('express')

const app = express()

app.use('/clock',express.static('./clock'))

app.get('/',(req,res)=>{
    res.send(req.query)
})

app.post('/post',(req,res)=>{
    res.send(req.method)
})

app.get('/user/:id',(req,res)=>{
    res.send(req.params) //params为匹配到的动态参数
})

app.get('/home',(req,res)=>{
    res.send('THIS IS HOME')
})

app.listen(80,()=>{
    console.log('express is run on http://127.0.0.1')
})
