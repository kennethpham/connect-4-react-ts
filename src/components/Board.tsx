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
  }, []);

  const chooseColCallBack = (col: number): boolean => {
    let found = false;
    const newBoardArr = boardArr;
    for (let i = 5; i >= 0; i--) {
      if (boardArr[i][col] === 0) {
        newBoardArr[i][col] = props.player;
        setBoardArr(newBoardArr);
        found = true;
        break;
      }
    }
    return found;
  };

  return (
    <div className='Board'>
      <div className='Board-Container'>
        {boardArr.map((row, rowIndex) => {
          return (
            <div className='Tile-Row' key={rowIndex}>
              {row.map((_, colIndex) => {
                return (
                  <div
                    className='Tile-Col' key={`${rowIndex}-${colIndex}`}
                  >
                    <Tile
                      playerCallback={props.playerCallback}
                      col={colIndex}
                      boardVal={boardArr[rowIndex][colIndex]}
                      chooseColCallBack={chooseColCallBack}
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
