import React from 'react'
import {Button,List} from 'antd-mobile'

class App extends React.Component{
  render () {
    const boss = '李云龙'
    return (<div>
            <h2>独立团,团长是{boss}</h2>
            <FirstYing boss="张大彪"></FirstYing>
            <QiBingLian boss="孙德胜"></QiBingLian>
          </div>)
  }
}

function QiBingLian (props) {
  return <h2>骑兵连连长{props.boss},冲！！！冲！！！冲！！！</h2>
}

class FirstYing extends React.Component{
  constructor(props){
    super()
    this.state = {
      solders:['虎子','柱子','王根生']
    }
  }
  componentWillMount() {
    console.log('组建马上就要开始加载了')
  }
  componentDidMount() {
    console.log('组建加载完毕了')
  }
  componentWillReceiveProps (nextProps) {
    console.log('组件准备开始接受父组件的值了')
    console.log(`这个值是 ${nextProps}`)
  }
  shouldComponentUpdate(){
    console.log('判断是不是更新的组件')
    return true
  }
  componentWillUpdate(){
    console.log('马上要开始更新组件了')
  }
  componentDidUpdate(){
    console.log('组件更新完成')
  }
  componentWillUnmount(){
    console.log('组件卸载了')
  }
  addSolder () {
    console.log('hello add solder')
    this.setState({
      solders:[...this.state.solders,`新兵蛋子${Math.random()*100}`]
    })
    console.log(this.state.solders)
  }
  render () {
    console.log('组建正在加载')
    return (
      <div>
        <h2>一营营长{this.props.boss}</h2>
        <Button onClick={() => this.addSolder()} type="primary">新兵入伍</Button>
        <List
          renderHeader = { () => '士兵列表'}
        >
          {this.state.solders.map(v=>{
              return <List.Item key="{v}">{v}</List.Item>
            })}
        </List>
        <ul>
          {}
        </ul>
      </div>
    )
  }
}

export default App