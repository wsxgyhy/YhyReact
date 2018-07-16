import React from 'react'
import { login, getUserInfo} from './Auth.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


// 两个reducers  每个reducer都有一个state
@connect(
    state =>state.auth,
    {login, getUserInfo}
)
class Auth extends React.Component {
   componentDidMount = () => {
     this.props.getUserInfo()
   }
   
    render(){
        return (
            <div>
                <h1>{`我的名字${this.props.user},年龄是${this.props.age}岁`}</h1>
                {this.props.isAuth ? <Redirect to="/dashboard/"></Redirect> : <h2>你没有权限，需要登陆才能使用</h2>}
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth