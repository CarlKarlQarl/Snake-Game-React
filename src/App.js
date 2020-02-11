import React, { Component } from 'react';
import './App.css';
import TableOfSquares from "./components/TableOfSquares"

class App extends Component {

  state = {
    rows: 10,
    columns: 10,
    activeX: 1,
    activeY: 1
  }

  changeDirection = (event) => {
    event.persist()
    this.moveActiveSquare(event)()
    setTimeout(() => this.changeDirection(event), 1000)
  }

  moveActiveSquare = (event) => {

    const { key } = event
    const { rows, columns, activeX, activeY } = this.state

    const directions = {
      ArrowDown: () => activeY + 1 < columns 
        ? this.setState({ activeY: activeY + 1 }) 
        : null,
      ArrowUp: () => activeY - 1 >= 0 
        ? this.setState({ activeY: activeY - 1 }) 
        : null,
      ArrowRight: () => activeX + 1 < rows 
        ? this.setState({ activeX: activeX + 1 }) 
        : null,
      ArrowLeft: () => activeX - 1 >= 0 
        ? this.setState({ activeX: activeX - 1 }) 
        : null,
      m: () => this.repeatConsoleLog(),
      default: () => null
    }
    return directions[key] || directions.default
  }

  repeatConsoleLog = () => {
      console.log("hit")
      setTimeout(this.repeatConsoleLog, 1000)
  }

  render () {
    return (
      <div 
        className="App"
        onKeyDown={(event) => this.changeDirection(event)}
        tabIndex="0"
      >
        <TableOfSquares 
          rows={this.state.rows} 
          columns={this.state.columns} 
          activeX={this.state.activeX}
          activeY={this.state.activeY}
        />
      </div>
    );
  }
}

export default App;
