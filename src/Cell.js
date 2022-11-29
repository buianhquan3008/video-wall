import React, { useEffect } from 'react'

export default function Cell({cell, matrix, setMatrix}) {
  const handleMouseDown = (event) => {
      const child = event.currentTarget;
      let row = +child.parentNode.rowIndex;
      let column = +child.cellIndex; 
      const newMatrix = [...matrix];
      console.log(row, column)      
      // while (newMatrix[row][column]['real'] != true) {
      //   row++;
      // }
      console.log(newMatrix[row][column])
      setMatrix(newMatrix);
    };

    const handleMouseOver = (event) => {
        
    };
    
  return (
    <td 
      colSpan={cell.colSpan} 
      rowSpan={cell.rowSpan} 
      className={cell.selected ? 'selected': ''} 
      onDragStart={(evt) => {
        evt.preventDefault();
      }}
      onMouseDown={handleMouseDown}
      onMouseOver={handleMouseOver}
    >
    </td>
  )
}
