import React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon, InputItem } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            title:''
        }
    }
    handleChange (key,value) {
        this.setState({
            [key]:value
        })
    }
    render () {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    信息完善
                </NavBar>
                <AvatarSelector></AvatarSelector>
                <InputItem
                    onChange = { (v) => {this.handleChange('title' ,v)}}
                >
                    招聘职位
                </InputItem>
                <InputItem
                    onChange = { (v) => {this.handleChange('company' ,v)}}
                >
                    公司名称
                </InputItem>
                <InputItem
                    onChange = { (v) => {this.handleChange('money' ,v)}}
                >
                    薪资范围
                </InputItem>
            </div>
        )
    }
}
export default BossInfo

const nameChange = (aaa) => {
    
    let obj = {
        
    }

}
nameChange('xiaoming')

