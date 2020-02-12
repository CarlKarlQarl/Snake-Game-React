import React from 'react'
import Square from './Square'

export default function RowOfSquares({ rows, snake }) {

    console.log("snake at rows", snake)
    let theRow = []
    for (let i = 0; i < rows; i++){
        theRow.push(
            <Square 
                key={i}
                // active={snake && i === snake[0].snakeX ? true : false}
                active={snake.find(coords => {
                    return i === coords.snakeX
                })}
            />
        )
    }
    
    return (
        <div className="RowOfSquares-div">
            {theRow}
        </div>
    )
}
