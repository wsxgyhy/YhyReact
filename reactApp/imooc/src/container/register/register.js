import React from 'react'
import Logo from '../../component/logo/logo.js'
import { 
    List, 
    InputItem, 
    Button, 
    WingBlank, 
    WhiteSpace,
    Radio
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {register, verifyUserName} from '../../redux/user.redux'


const RadioItem = Radio.RadioItem;
@connect(
    state=>state.user,
    {register, verifyUserName}
)
class Register extends React.Component {
    constructor (props) {
        super(props);
        this.register = this.register.bind(this);
        this.verifyName = this.verifyName.bind(this);
        this.state = {
            user:'',
            psw:'',
            repeatPsw:'',
            type:"genius" //或者boss
        }
        
    }
    register () {
        console.log(this.state)
        this.props.register(this.state)
    }
    handleChange (key, value) {
        this.setState({
            [key]:value
        })
    }
    verifyName () {
        if (this.state.user) {
            this.props.verifyUserName(this.state.user)
        }
    }
    render () {
        return (
            <div>
                { this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null }
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入用户名"
                            onChange = {(v) => this.handleChange('user',v)}
                            onBlur = {this.verifyName}
                        >
                            用户名
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            onChange = {(v) => this.handleChange('psw',v)}
                            maxLength = "20"
                        >
                            密码
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <InputItem
                            clear
                            placeholder="请确认密码"
                            onChange = {(v) => this.handleChange('repeatPsw',v)}
                            maxLength = "20"
                        >
                            确认密码
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <RadioItem 
                            checked = {this.state.type === "genius"} 
                            onChange = {(v) => this.handleChange('type',"genius")}
                            key = 'genius'
                        >
                            牛人
                        </RadioItem>
                        <RadioItem 
                            checked = {this.state.type !== "genius"}
                            onChange = {(v) => this.handleChange('type',"boss")}
                            key = 'boss'
                        >
                            Boss
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register