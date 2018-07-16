import React from 'react'
import {connect} from 'react-redux'
import { addGUN,removeGUN, addGunAsync} from './index.redux' 

const mapStatetoProps = state => ({num:state.counter})

const actionCreators = {addGUN,removeGUN, addGunAsync}
@connect(
    //要什么属性
    mapStatetoProps,
    //要什么方法
    actionCreators
)

class App extends React.Component{
    // constructor (props) {
    //     super(props)
    // }
    render(){ 
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGUN}>增加机枪</button>
                <button onClick={this.props.removeGUN}>减少机枪</button>
                <button onClick={this.props.addGunAsync}>延迟两秒增加机枪</button>
            </div>
            
        )
    }
}



export default App