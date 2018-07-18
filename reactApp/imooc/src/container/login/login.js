import React from 'react'
import Logo from '../../component/logo/logo.js'
import { 
    List, 
    InputItem, 
    Button, 
    WingBlank, 
    WhiteSpace
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'


@connect(
    state => state.user,
    {login}
)
class Login extends React.Component {
    constructor (props) {
        super(props)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.state = {
            user:'',
            psw:''
        }
    }
    register () {
        this.props.history.push('/register')
    }
    login(){
        this.props.login(this.state)
        console.log(this.state)
    }
    changeValue (key, value) {
        this.setState({
            [key]:value
        })
    }
    render () {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <h2>登陆页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            clear
                            placeholder="用户名"
                            onChange = {(v) => this.changeValue('user', v)}
                        >用户名</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <InputItem
                            clear
                            type="password"
                            placeholder="请输入密码"
                            maxLength="20"
                            onChange = {(v) => this.changeValue('psw', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login