const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const userRouter = require('./user.js')


const app = express();
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user',userRouter)

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})