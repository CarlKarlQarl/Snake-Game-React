import React from 'react'

export default function PlayerStats({ score }) {
    return (
        <div className="score-div">
            <h1>Score: {score}</h1>
        </div>
    )
}
