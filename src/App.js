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
      this.moveActiveSquare()()
      setTimeout(() => this.repeatDirection(), 200)
  }

  moveActiveSquare = () => {

    const { rows, columns, snake, key } = this.state

    const directions = {
      ArrowDown: () => snake[0].snakeY + 1 < columns 
        ? this.setState({
            snake: [
              {
                snakeX: snake[0].snakeX,
                snakeY: snake[0].snakeY + 1
              }, ...this.state.snake
            ]
          }) 
        : null,
      ArrowUp: () => snake[0].snakeY - 1 >= 0 
        ? this.setState({
            snake: [
              {
                snakeX: snake[0].snakeX,
                snakeY: snake[0].snakeY - 1
              }, ...this.state.snake
            ]
          }) 
        : null,
      ArrowRight: () => snake[0].snakeX + 1 < rows 
        ? this.setState({
          snake: [
            {
              snakeX: snake[0].snakeX + 1,
              snakeY: snake[0].snakeY
            }, ...this.state.snake
          ]
        })
        : null,
      ArrowLeft: () => snake[0].snakeX - 1 >= 0 
        ? this.setState({
          snake: [
            {
              snakeX: snake[0].snakeX - 1,
              snakeY: snake[0].snakeY
            }, ...this.state.snake
          ]
        })
        : null,
      default: () => null
    }
    return directions[key] || directions.default
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
        />
      </div>
    );
  }
}

export default App;
