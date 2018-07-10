import React from 'react'


class App extends React.Component{
    // constructor (props) {
    //     super(props)
    // }
    render(){
        const store = this.props.store;
        const num = store.getState();
        const addGUN = this.props.addGUN
        const removeGUN = this.props.removeGUN
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={() => store.dispatch(addGUN())}>增加机枪</button>
                <button onClick={() => store.dispatch(removeGUN())}>减少机枪</button>
            </div>
            
        )
    }
}

export default App