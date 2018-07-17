import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        const pathList = []
      //获取用户信息
        axios.get('/user/info')
        .then(res=>{
            if (res.status === 200 || res.status ===304) {
                if (res.data.code === 0) {

                } else {
                    this.props.history.push('/login')
                }
            }
        },res=>{})
      //用户是否登陆
      //现在的url地址   login不需要跳转   
      //用户的type是boss还是genius
      //用户是否完善信息  （选择头像  个人简介）
    };
    render() {
        return null
    }
    
} 

export default AuthRoute