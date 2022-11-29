import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
// import Content from './components/Content';
// import Header from './components/Header';
import Table from './Table';
import { Matrix } from './matrix';

function App() {
    const [start, setStart] = useState(-1);
    const [end, setEnd] = useState(-1);
    const [rowStart, setRowStart] = useState(-1);
    const [rowEnd, setRowEnd] = useState(-1);
    const [tableRef, setTableRef] = useState(null);
    const [move, setMove] = useState(false);

    // const handleMouseDown = (event, row) => {
    //     const child = event.currentTarget;
    //     child.classList.add('selected');
    //     clearSelected();
    //     setStart(child.cellIndex);
    //     setRowStart(child.parentNode.rowIndex);
    //     setEnd(child.cellIndex);
    //     setRowEnd(child.parentNode.rowIndex);
    //     setMove(true);
    //     document.addEventListener('mouseup', () => {
    //         setMove(false);
    //     });
    // };

    // const handleMouseOver = (event) => {
    //     if (!move) return;
    //     event.currentTarget.classList.add('selected');
    //     const child = event.currentTarget;
    //     child.classList.add('selected');
    //     // clearSelected();
    //     setEnd(child.cellIndex);
    //     setRowEnd(child.parentNode.rowIndex);
    // };

    // const clearSelected = () => {
    //     const table = tableRef.current;
    //     for (let row = 0; row <= 5; row++) {
    //         for (let column = 0; column <= 9; column++) {
    //             table.rows[row].cells.item(column).classList.remove('selected');
    //         }
    //     }
    // };
    useEffect(() => {
        if (start < 0 || end < 0 || rowEnd < 0 || rowStart < 0) return;

        const table = tableRef.current;
        let a = [];
        for (let row = 0; row <= 4; row++) {
            let b = [];
            for (let column = 0; column <= 4; column++) {
                b.push(0);
            }
            a.push(b);
        }
        console.log('dff', table);
        for (
            let row = Math.min(rowStart, rowEnd);
            row <= Math.max(rowStart, rowEnd);
            row++
        ) {
            for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
                table.rows[row].cells.item(i).classList.add('selected');
                a[row][i] = 1;
            }
        }
        for (let row = 0; row <= 4; row++) {
            for (let column = 0; column <= 4; column++) {
                if (a[row][column] !== 1) {
                    table.rows[row].cells
                        .item(column)
                        .classList.remove('selected');
                }
            }
        }
    }, [start, end, rowEnd, rowStart, move]);
    console.log('abc', start, end, rowStart, rowEnd);

    const [matrix, setMatrix] = useState(Matrix);

    return (
        <div className='app'>
            <Table
                setTableRef={setTableRef}
                // ref={tableRef}
                matrix={matrix}
                setMatrix={setMatrix}
                start={start}
                end={end}
                rowStart={rowStart}
                rowEnd={rowEnd}
                // tableRef={tableRef}
                move={move}
                setEnd={setEnd}
                setStart={setStart}
                setRowEnd={setRowEnd}
                setMove={setMove}
                setRowStart={setRowStart}
            />
        </div>
    );
}

export default App;
