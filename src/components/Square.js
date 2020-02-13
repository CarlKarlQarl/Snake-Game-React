import React, { Component } from 'react'

export default class Square extends Component {

    render() {
        const { snake, food } =this.props

        let snakeClass = snake && (snake.snakeX + snake.snakeY) % 2 === 0 ? " snake-green" : ""
        let lightSnakeClass = snake && (snake.snakeX + snake.snakeY) % 2 === 1 ? " snake-lightgreen" : ""
        let foodClass = food ? " food" : ""

        return (
            <div 
                className={"Square-div" + snakeClass + lightSnakeClass + foodClass}
            ></div>
        )
    }
}
