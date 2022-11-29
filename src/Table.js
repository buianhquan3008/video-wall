import React from 'react'
import Cell from './Cell'

export default function Table({matrix, setMatrix}) {
  return (
  <table>{matrix.map(itemTr=>(
    <tr>
      {itemTr.filter(item=>item.real==true).map(itemTd=>(
        <Cell cell={itemTd} matrix={matrix} setMatrix={setMatrix}/>
      ))}
    </tr>
    ))}
  </table>
  )
}
