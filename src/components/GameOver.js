import React from 'react'

export default function GameOver({ gameOver, restartGame }) {

    let showGameOver = gameOver ? " visible" : " hidden" 

    return (
        <div
            className={"modal" + showGameOver}
        >
            <h1
                className="game-over-label"
            >Game Over</h1>
            <button
                className="game-over-button"
                onClick={restartGame}
            >Play Again?</button>
        </div>
    )
}
