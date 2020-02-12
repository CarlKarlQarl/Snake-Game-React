import React, { Component } from 'react';
import './App.css';
import TableOfSquares from "./components/TableOfSquares"

class App extends Component {

  state = {
    rows: 10,
    columns: 10,
    snake: [{
      snakeX: 3,
      snakeY: 7
    },{
      snakeX: 7,
      snakeY: 3
    },{
      snakeX: 5,
      snakeY: 5
    },{
      snakeX: 5,
      snakeY: 4
    }, {
      snakeX: 4,
      snakeY: 5
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

    // const { rows, columns, snake, snake: { snakeX, snakeY }, key } = this.state

    // const directions = {
    //   ArrowDown: () => activeY + 1 < columns 
    //     ? this.setState({ activeY: activeY + 1 }) 
    //     : null,
    //   ArrowUp: () => activeY - 1 >= 0 
    //     ? this.setState({ activeY: activeY - 1 }) 
    //     : null,
    //   ArrowRight: () => activeX + 1 < rows 
    //     ? this.setState({ activeX: activeX + 1 }) 
    //     : null,
    //   ArrowLeft: () => activeX - 1 >= 0 
    //     ? this.setState({ activeX: activeX - 1 }) 
    //     : null,
    //   m: () => this.repeatConsoleLog(),
    //   default: () => null
    // }
    // return directions[key] || directions.default
  }

  repeatConsoleLog = () => {
      console.log("hit")
      setTimeout(this.repeatConsoleLog, 1000)
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
