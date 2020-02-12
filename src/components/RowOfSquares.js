import React from 'react'
import Square from './Square'

export default function RowOfSquares({ rows, snake, food }) {

    // console.log("snake at rows", snake)
    let theRow = []
    for (let i = 0; i < rows; i++){
        theRow.push(
            <Square 
                key={i}
                snake={snake.find(coords => {
                    return i === coords.snakeX
                })}
                food={food.find(coords => {
                    return i === coords.foodX
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
