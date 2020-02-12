import React, { Component } from 'react';
import './App.css';
import TableOfSquares from "./components/TableOfSquares"

class App extends Component {

  state = {
    rows: 10,
    columns: 10,
    snake: [{
      snakeX: 1,
      snakeY: 1
    }],
    length: 5,
    food: [{
      foodX: 1,
      foodY: 6
    }],
    key: null,
    running: false
  }

  setDirection = (event) => {
    this.setState({key: event.key})
    if (!this.state.running){
      this.setState({running: true})
      this.repeatDirection()
    }
  }

  repeatDirection = () => {

    // const { snake, food } = this.state
    // const { snakeX, snakeY } = snake[0]
    // const { foodX, foodY } = food[0]

    this.moveActiveSquare()()

    //Collision
    // if (snakeX === foodX && snakeY === foodY) {
    //   console.log("hit")
    //   this.setState({
    //     length: this.state.length + 1
    //   })
    // }
    
    setTimeout(() => this.repeatDirection(), 200)
  }

  moveActiveSquare = () => {

    const { rows, columns, snake, key } = this.state
    const { snakeX, snakeY } = snake[0]

    const directions = {
      ArrowDown: () => snakeY + 1 < columns 
        ? this.moveDown()
        : null,
      ArrowUp: () => snakeY - 1 >= 0 
        ? this.moveUp()
        : null,
      ArrowRight: () => snakeX + 1 < rows 
        ? this.moveRight()
        : null,
      ArrowLeft: () => snakeX - 1 >= 0 
        ? this.moveLeft()
        : null,
      default: () => null
    }
    return directions[key] || directions.default
  }

  moveDown = () => {
    const { rows, columns, snake, length, food } = this.state
    const { snakeX, snakeY } = snake[0]
    const { foodX, foodY } = food[0]

    this.setState({
      snake: [
        {
          snakeX: snakeX,
          snakeY: snakeY + 1
        }, ...this.state.snake.slice(0,length)
      ]
    })

    //Collision
    if (snakeX === foodX && snakeY + 1 === foodY) {
      console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }]
      })
    }
  }

  moveUp = () => {
    const { rows, columns, snake, length, food } = this.state
    const { snakeX, snakeY } = snake[0]
    const { foodX, foodY } = food[0]

    this.setState({
      snake: [
        {
          snakeX: snakeX,
          snakeY: snakeY - 1
        }, ...this.state.snake.slice(0,length)
      ]
    })

    //Collision
    if (snakeX === foodX && snakeY - 1 === foodY) {
      console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }]
      })
    }
  }

  moveRight = () => {
    const { rows, columns, snake, length, food } = this.state
    const { snakeX, snakeY } = snake[0]
    const { foodX, foodY } = food[0]

    this.setState({
      snake: [
        {
          snakeX: snakeX + 1,
          snakeY: snakeY
        }, ...this.state.snake.slice(0,length)
      ]
    })

    //Collision
    if (snakeX + 1 === foodX && snakeY === foodY) {
      console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }]
      })
    }
  }

  moveLeft = () => {
    const { rows, columns, snake, length, food } = this.state
    const { snakeX, snakeY } = snake[0]
    const { foodX, foodY } = food[0]

    this.setState({
      snake: [
        {
          snakeX: snakeX - 1,
          snakeY: snakeY
        }, ...this.state.snake.slice(0,length)
      ]
    })

    //Collision
    if (snakeX - 1 === foodX && snakeY === foodY) {
      console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }]
      })
    }
  }

  render () {
    return (
      <div 
        className="App"
        onKeyDown={this.setDirection}
        tabIndex="0"
      >
        <TableOfSquares 
          rows={this.state.rows} 
          columns={this.state.columns} 
          snake={this.state.snake}
          food={this.state.food}
        />
      </div>
    );
  }
}

export default App;
