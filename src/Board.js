import React from 'react';
import Tile from './Tile'
import './Board.css';

const Board = props => {
  const currentSudoku = props.sudoku.split("");
  const initialSudoku = props.initial.split("");
 
  let sudokuInput = currentSudoku.map((value, index) => 
    <Tile
      key={index}
      id={index}
      value={(value === ".") ? undefined : value}
      onChange={(initialSudoku[index] === ".") ? props.onChange : undefined}
      noedit={(initialSudoku[index] === "." ) ? false : true}
    />
  )
  return <div className='board-grid'>{sudokuInput}</div>
}

export default Board;