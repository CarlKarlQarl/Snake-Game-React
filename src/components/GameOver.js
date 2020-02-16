import React, { Component } from 'react'

export default class GameOver extends Component {

    state = {
        newInitials: "",
        disableInput: false
    }

    showHighscores = () => {
        let toptenscores = this.props.highscores.sort((a,b) => (a.points < b.points) ? 1 : -1).slice(0, 10)

        return toptenscores.map((score, index) => {
            return (
                <div
                    className="user-scores"
                    key={index}
                >
                    <p>{score.initials}</p>
                    <p>{score.points}</p>
                </div>
            )
        })
    }

    handleChange = (event) => {
        this.setState({
            newInitials: event.target.value.toUpperCase()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.postNewScore(event)
        this.setState({
            newInitials: "",
            disableInput: true
        })
    }

    handlePlayAgain = () => {
        this.setState({
            disableInput: false
        })
        this.props.restartGame()
    }

    render() {
        let showGameOver = this.props.gameOver ? " visible" : " hidden" 

        return (
            <div className={"modal" + showGameOver}>
                <h1
                    className="game-over-label"
                >Game Over</h1>
                <div className="scoreboard">
                    <div className="highscore-labels">
                        <p>PLAYER</p><p>SCORE</p>
                    </div>
                    <div className="all-highscores-div">
                        {this.showHighscores()}
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="initials"
                        placeholder="Enter Initials here!" 
                        value={this.state.newInitials}
                        disabled={this.state.disableInput ? "disabled" : ""}
                        maxLength={3}
                        onChange={this.handleChange}
                    ></input>
                    <input 
                        type="submit" 
                        value="Submit Score"
                    ></input>
                </form>
                <button
                    className="game-over-button"
                    onClick={this.handlePlayAgain}
                >Play Again?</button>
            </div>
        )
    }
}
