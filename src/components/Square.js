import React, { Component } from 'react'

export default class Square extends Component {

    render() {
        let snakeClass = this.props.snake ? " snake" : ""
        let foodClass = this.props.food ? " food" : ""

        return (
            <div 
                className={"Square-div" + snakeClass + foodClass}
            ></div>
        )
    }
}
