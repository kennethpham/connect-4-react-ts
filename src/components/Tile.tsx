import { FC } from 'react';
import '../styles/Tile.css';

interface TileProps {
  playerCallback(): void;
  col: number;
  boardVal: number;
  chooseColCallBack(col: number): boolean;
}

const Tile: FC<TileProps> = (props) => {
  const changeColor = (): void => {
    const used = props.chooseColCallBack(props.col);
    if (used) {
      props.playerCallback();
    }
  }

  return (
    <div
      className='Tile'
      onClick={changeColor}
      style={{
        backgroundColor:
          props.boardVal === 0 ?
            'white' : props.boardVal === 1 ?
              'red' : 'blue',
      }}
    >
    </div>
  );
}

export default Tile;
