import React from 'react'
import RowOfSquares from './RowOfSquares'

export default function TableOfSquares({ rows, columns, activeX, activeY }) {

    let theTable = []
    for (let i = 0; i < columns; i++){
        theTable.push(
            <RowOfSquares 
                rows={rows} 
                key={i} 
                activeX={i === activeY ? activeX : null}
            />
        )
    }

    return (
        <div className="TableOfSquares-div">
            {theTable}
        </div>
    )
}
