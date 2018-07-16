import React from 'react'
import { login } from './Auth.redux'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


// 两个reducers  每个reducer都有一个state
@connect(
    state =>state.auth,
    {login}
)
class Auth extends React.Component {
   
    render(){
        return (
            <div>
                {this.props.isAuth ? <Redirect to="/dashboard/"></Redirect> : <h2>你没有权限，需要登陆才能使用</h2>}
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth