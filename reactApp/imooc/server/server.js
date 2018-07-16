const express = require('express');
const mongoose = require('mongoose');
//连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('mongo connect success')
})

//类似于mysql的表  mongo里有文档和字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

User.update({user:'Yuhaiyue'},{'$set':{age:88}},function(err, doc){
    console.log(doc)
})

//创建数据
User.create({
    user:"Yuhaiyue",
    age:18
},function(err, doc){
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

//新建app
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/data',function(req,res){
    User.find({},function(err ,doc){
        res.json(doc)
    })
    
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})