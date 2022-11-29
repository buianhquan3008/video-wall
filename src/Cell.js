import React, { useEffect } from 'react';

export default function Cell({
    cell,
    matrix,
    setMatrix,
    start,
    end,
    setStart,
    setEnd,
    rowStart,
    rowEnd,
    move,
    setRowStart,
    setRowEnd,
    setMove,
    tableRef,
}) {
    const handleMouseDown = (event) => {
        const child = event.currentTarget;
        let row = +child.parentNode.rowIndex;
        let column = +child.cellIndex;
        const newMatrix = [...matrix];
        console.log(row, column);
        // while (newMatrix[row][column]['real'] != true) {
        //   row++;
        // }
        child.classList.add('selected');
        console.log(newMatrix[row][column]);
        setStart(column);
        setRowStart(row);
        setEnd(column + cell.colSpan - 1);
        setRowEnd(row + cell.rowSpan - 1);
        setMove(true);
        document.addEventListener('mouseup', () => {
            setMove(false);
        });
        // setMatrix(newMatrix);
    };

    const display = !cell.real ? 'none' : '';
    const handleMouseOver = (event) => {
        if (!move) return;
        const child = event.currentTarget;
        let row = +child.parentNode.rowIndex;
        let column = +child.cellIndex;
        // event.currentTarget.classList.add('selected');
        child.classList.add('selected');
        setEnd(column + cell.colSpan - 1);
        setRowEnd(row + cell.rowSpan - 1);
    };

    return (
        <td
            colSpan={cell.colSpan}
            rowSpan={cell.rowSpan}
            className={cell.selected ? 'selected' : ''}
            onDragStart={(evt) => {
                evt.preventDefault();
            }}
            style={{ display }}
            onMouseDown={handleMouseDown}
            onMouseOver={handleMouseOver}
        ></td>
    );
}
