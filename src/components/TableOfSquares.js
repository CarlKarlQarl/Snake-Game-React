import React from 'react'
import RowOfSquares from './RowOfSquares'

export default function TableOfSquares({ rows, columns, snake }) {

    console.log("snake at table", snake)
    let theTable = []
    for (let i = 0; i < columns; i++){
        theTable.push(
            <RowOfSquares 
                rows={rows} 
                key={i} 
                snake={snake.filter(coords => {
                    return i === coords.snakeY
                })}
            />
        )
    }

    return (
        <div className="TableOfSquares-div">
            {theTable}
        </div>
    )
}
