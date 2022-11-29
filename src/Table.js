import React, { useEffect, useRef } from 'react';
import Cell from './Cell';

export default function Table({
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
    setTableRef,
}) {
    const tableRef = useRef(null);
    // const handleClick = () => {
    //     setTableRef(tableRef);
    // };
    useEffect(() => {
        setTableRef(tableRef);
    }, tableRef);

    return (
        <table ref={tableRef}>
            {matrix.map((itemTr) => (
                <tr>
                    {itemTr
                        // .filter((item) => item.real == true)
                        .map((itemTd) => (
                            <Cell
                                cell={itemTd}
                                matrix={matrix}
                                setMatrix={setMatrix}
                                start={start}
                                end={end}
                                rowStart={rowStart}
                                rowEnd={rowEnd}
                                tableRef={tableRef}
                                move={move}
                                setEnd={setEnd}
                                setStart={setStart}
                                setRowEnd={setRowEnd}
                                setMove={setMove}
                                setRowStart={setRowStart}
                            />
                        ))}
                </tr>
            ))}
        </table>
    );
}
