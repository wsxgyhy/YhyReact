const express = require('express');
const utils = require('utility')
const Router = express.Router();
const model = require('./model');
console.log(model)
const User = model.getModel('user')

Router.post('/register',function (req,res) {
    const {user, psw, type} = req.body;
    User.findOne({user:user}, function (err, doc) {
        if (doc) {
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user, psw:md5Psw(psw), type},function (e, d) {
            if (e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0,msg:''})
        })
    })
})

Router.post('/login',function (req,res) {
    const {user, psw} = req.body;
    User.findOne({user,psw:md5Psw(psw)},{'psw':0,'__v':0,'_id':0}, function (err, doc) {
        if (!doc) {
            console.log(doc)
            return res.json({code:1,msg:'用户名或密码错误'})
        } else {
            return res.json({code:0,data:doc})
        }
        
    })
})

Router.post('/verifyName',function (req,res) {
    const {name} = req.body;
    User.findOne({user:name}, function (err, doc) {
        if (doc) {
            return res.json({code:1,msg:'用户名不可用'})
        } else {
            return res.json({code:0})
        }
        
    })
})


Router.get('/info',function (req,res) {
    //用户有没有cookie
    return res.json({code:1}) 
})

Router.get('/list',function (req,res) {
    User.find({},function(err, doc){
        return res.json(doc)
    })
})

function md5Psw (psw) {
    const solt = 'md5_accenture_linux_windows_$HHS*(^^^^^MJGiio'
    return utils.md5(utils.md5(psw + solt))
}



module.exports = Router