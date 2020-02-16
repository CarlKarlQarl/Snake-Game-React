import React, { Component, createRef } from 'react';
import './App.css';
import TableOfSquares from "./components/TableOfSquares"
import PlayerStats from './components/PlayerStats';
import GameOver from './components/GameOver';
import Instructions from './components/Instructions';

class App extends Component {

  state = {
    rows: 10,
    columns: 10,
    snake: [{
      snakeX: 2,
      snakeY: 4
    }],
    length: 2,
    food: [{
      foodX: 7,
      foodY: 4
    }],
    key: null,
    running: false,
    score: 0,
    // https://www.youtube.com/watch?v=i4VqXRRXi68
    bonus: 52,
    gameOver: false,
    showInstructions: false,
    highscores: []
  }

  gamespace = createRef();

  componentDidMount = () => {
    this.gamespace.current.focus()
    fetch(`https://snake-game-rails.herokuapp.com/scores`)
      .then(response => response.json())
      .then(scores => {
        scores.forEach(score => {
          this.setState({
            highscores:[...this.state.highscores, {
              initials: score.initials,
              points: score.points
            }]
          })
        })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate = () => {
    this.gamespace.current.focus()
  }

  setDirection = (event) => {
    if (!this.state.gameOver){
      this.setState({key: event.key})
      if (!this.state.running){
        this.setState({running: true})
        this.repeatDirection()
      }
    }
  }

  repeatDirection = () => {
    if (!this.state.gameOver){
      this.moveActiveSquare()()
      setTimeout(() => this.repeatDirection(), 175)
    }
  }

  moveActiveSquare = () => {

    const { rows, columns, snake, key } = this.state
    const { snakeX, snakeY } = snake[0]

    const directions = {
      ArrowDown: () => snakeY + 1 < columns 
        ? this.moveDown()
        : this.setState({gameOver: true}),
      ArrowUp: () => snakeY - 1 >= 0 
        ? this.moveUp()
        : this.setState({gameOver: true}),
      ArrowRight: () => snakeX + 1 < rows 
        ? this.moveRight()
        : this.setState({gameOver: true}),
      ArrowLeft: () => snakeX - 1 >= 0 
        ? this.moveLeft()
        : this.setState({gameOver: true}),
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
      ],
      bonus: this.state.bonus - 1 >= 0 ? this.state.bonus - 1 : 0
    })

    //Collision with food
    if (snakeX === foodX && snakeY + 1 === foodY) {
      console.log("hit food", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }],
        score: this.state.score + this.state.length + this.state.bonus,
        bonus: 52
      })
    }

    //Collision with self
    if (snake.find(segment => {return snakeX === segment.snakeX && snakeY + 1 === segment.snakeY})) {
      this.setState({gameOver: true})
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
      ],
      bonus: this.state.bonus - 1 >= 0 ? this.state.bonus - 1 : 0
    })

    //Collision with food
    if (snakeX === foodX && snakeY - 1 === foodY) {
      // console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }],
        score: this.state.score + this.state.length + this.state.bonus,
        bonus: 52
      })
    }

    //Collision with self
    if (snake.find(segment => {return snakeX === segment.snakeX && snakeY - 1 === segment.snakeY})){
      this.setState({gameOver: true})
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
      ],
      bonus: this.state.bonus - 1 >= 0 ? this.state.bonus - 1 : 0
    })

    //Collision with food
    if (snakeX + 1 === foodX && snakeY === foodY) {
      // console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }],
        score: this.state.score + this.state.length + this.state.bonus,
        bonus: 52
      })
    }

    //Collision with self
    if (snake.find(segment => {return snakeX + 1 === segment.snakeX && snakeY === segment.snakeY})){
      this.setState({gameOver: true})
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
      ],
      bonus: this.state.bonus - 1 >= 0 ? this.state.bonus - 1 : 0
    })

    //Collision with food
    if (snakeX - 1 === foodX && snakeY === foodY) {
      // console.log("hit", foodX, foodY)
      this.setState({
        length: this.state.length + 1,
        food: [{
          foodX: Math.floor(Math.random() * rows),
          foodY: Math.floor(Math.random() * columns)
        }],
        score: this.state.score + this.state.length + this.state.bonus,
        bonus: 52
      })
    }

    //Collision with self
    if (snake.find(segment => {return snakeX - 1 === segment.snakeX && snakeY === segment.snakeY})){
      this.setState({gameOver: true})
    }
  }

  restartGame = () => {
    this.setState({
      snake: [{
        snakeX: 2,
        snakeY: 4
      }],
      length: 2,
      food: [{
        foodX: 7,
        foodY: 4
      }],
      key: null,
      running: false,
      score: 0,
      bonus: 52,
      gameOver: false
    })
  }

  displayInstructions = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  postNewScore = (event) => {
    fetch("https://snake-game-rails.herokuapp.com/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        highscore: {
          initials: event.target.initials.value,
          points: this.state.score
        }
      })
    })
      .then(
        this.setState({
          highscores:[...this.state.highscores, {
            initials: event.target.initials.value,
            points: this.state.score
          }]
        })
      )
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div 
        ref={this.gamespace}
        className="App"
        onKeyDown={this.setDirection}
        tabIndex="0"
      >
        <PlayerStats 
          score={this.state.score}
        />
        <TableOfSquares 
          rows={this.state.rows} 
          columns={this.state.columns} 
          snake={this.state.snake}
          food={this.state.food}
        />
        <div className="button-container">
          <button
            className="instructions-button"
            onClick={this.displayInstructions}
          >Learn How To Play</button>
        </div>
        <GameOver
          gameOver={this.state.gameOver}
          restartGame={this.restartGame}
          highscores={this.state.highscores}
          postNewScore={this.postNewScore}
        />
        <Instructions 
          showInstructions={this.state.showInstructions}
        />
      </div>
    );
  }
}

export default App;
