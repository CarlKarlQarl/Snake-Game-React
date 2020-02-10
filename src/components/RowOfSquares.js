import React from 'react'
import Square from './Square'

export default function RowOfSquares({ rows, activeX }) {

    let theRow = []
    for (let i = 0; i < rows; i++){
        theRow.push(
            <Square 
                key={i}
                active={i === activeX ? true : false}
            />
        )
    }
    
    return (
        <div className="RowOfSquares-div">
            {theRow}
        </div>
    )
}
