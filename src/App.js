import React, { Component } from 'react';
import './App.css';
import TableOfSquares from "./components/TableOfSquares"

class App extends Component {

  state = {
    rows: 10,
    columns: 10,
    activeX: 5,
    activeY: 3
  }

  moveActiveSquare = ({ key }) => {

    const { activeX, activeY } = this.state

    const directions = {
      ArrowDown: () => this.setState({ activeY: activeY + 1 }),
      ArrowUp: () => this.setState({ activeY: activeY - 1 }),
      ArrowRight: () => this.setState({ activeX: activeX + 1 }),
      ArrowLeft: () => this.setState({ activeX: activeX - 1 }),
      default: () => null
    }

    return directions[key] || directions.default

  //   if (key === "ArrowDown") {
  //     console.log("state of activeY", activeY)
  //     this.setState({
  //       activeY: activeY + 1
  //     })
  //   }
  //   if (key === "ArrowUp") {
  //     console.log("state of activeY", activeY)
  //     this.setState({
  //       activeY: activeY - 1
  //     })
  //   }
  //   if (key === "ArrowLeft") {
  //     console.log("state of activeX", activeX)
  //     this.setState({
  //       activeX: activeX - 1
  //     })
  //   }
  //   if (key === "ArrowRight") {
  //     console.log("state of activeX", activeX)
  //     this.setState({
  //       activeX: activeX + 1
  //     })
  //   }
  }

  render () {
    return (
      <div 
        className="App"
        onKeyDown={(event) => this.moveActiveSquare(event)()}
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
