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

const RadioItem = Radio.RadioItem;

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.register = this.register.bind(this);
        this.RadioChange = this.RadioChange.bind(this)
        this.state = {
            type:"genius" //或者boss
        }
    }
    register () {

    }
    RadioChange(type) {
        this.setState({
            ...this.state,
            type:type
        })
    }
    render () {
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
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
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <List>
                        <InputItem
                            clear
                            type="password"
                            placeholder="请输入密码"
                        >确认密码</InputItem>
                    </List>
                    <WhiteSpace/>
                        <RadioItem checked = {this.state.type === "genius"} onChange = {this.RadioChange("genius")}>
                            牛人
                        </RadioItem>
                        <RadioItem checked = {this.state.type != "genius"} onChange = {this.RadioChange("boss")}>
                            Boss
                        </RadioItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register