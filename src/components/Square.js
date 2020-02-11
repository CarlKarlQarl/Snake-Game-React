import React, { Component } from 'react'

export default class Square extends Component {

    render() {
        let activeClass = this.props.active ? " active" : ""

        return (
            <div 
                className={"Square-div" + activeClass}
                onClick={this.handleClick}
            ></div>
        )
    }
}
