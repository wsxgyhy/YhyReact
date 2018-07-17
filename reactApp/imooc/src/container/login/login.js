import React from 'react'
import Logo from '../../component/logo/logo.js'
import { 
    List, 
    InputItem, 
    Button, 
    WingBlank, 
    WhiteSpace
} from 'antd-mobile'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    register () {
        this.props.history.push('/register')
    }
    login(){

    }
    render () {
        return (
            <div>
                <Logo></Logo>
                <h2>登陆页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            clear
                            type="phone"
                            placeholder="请输入手机号"
                            
                        >手机号</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <InputItem
                            clear
                            type="password"
                            placeholder="请输入密码"
                            maxLength="20"
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