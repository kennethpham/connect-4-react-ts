import { FC, useEffect, useState } from 'react';
import Tile from './Tile';
import '../styles/Board.css';

interface BoardProps {
  player: number;
  playerCallback(): void;
}

const Board: FC<BoardProps> = (props) => {
  const [boardArr, setBoardArr]: [number[][], 
    React.Dispatch<React.SetStateAction<number[][]>>]
    = useState<number[][]>([]);
  
  useEffect(() => {
    const newBoardArr: number[][] = [];
    let i: number;
    let j: number;
    for (i = 0; i < 6; i++) {
      newBoardArr.push([]);
      for (j = 0; j < 7; j++) {
        newBoardArr[i].push(0);
      }
    }
    setBoardArr(newBoardArr);
  }, [])

  return(
    <div className='Board'>
      <div className='Board-Container'>
        {boardArr.map((row, rowIndex) => {
          return(
            <div className='Tile-Row' key={rowIndex}>
              {row.map((val, colIndex) => {
                return(
                  <div 
                    className='Tile-Col' key={`${rowIndex}-${colIndex}`}
                  >
                    <Tile player={props.player}
                      playerCallback={props.playerCallback}
                      val={val}
                    />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Board;
