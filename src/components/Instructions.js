import React from 'react'

export default function Instructions({ showInstructions }) {

    let displayInstructions = showInstructions ? " visible" : " hidden"

    return (
        <div
            className={"modal instructions"  + displayInstructions}
        >
            <p>Objective: You will be controlling the green snake, and trying to navigate toward red food pellets so that the snake can eat it and grow longer</p>
            <p>Controls: Use the Directional Keys (↑, ↓, →, ←) to change the snake's direction</p>
            <p>Scoring: Each time food is eaten, your score will increase by the current length of the snake, plus a time bonus for reaching the next food pellet quickly</p>
            <p>Hazards: Colliding with the boundaries or your own body will end the game</p>
            <p>Warning: You are able to move backwards into your own body, which will count as a collision with yourself, and end the game</p>
        </div>
    )
}
