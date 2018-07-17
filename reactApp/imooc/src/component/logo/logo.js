import React from 'react'
import Img from './logo.jpg'
import './logo.css'

class Logo extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return (
            <div className="logo-container">
                <img src={Img} alt=""/>
            </div>
        )
    }
}

export default Logo