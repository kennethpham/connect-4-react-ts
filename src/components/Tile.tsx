import { FC, useState } from 'react';
import '../styles/Tile.css';

interface TileProps {
  player: number;
  playerCallback(): void;
  val: number;
}

const Tile: FC<TileProps> = (props) => {
  const [backgroundColor, setBackgroundColor]
    : [string, React.Dispatch<React.SetStateAction<string>>]
    = useState<string>('white');
  const changeColor = (): void => {
    if (backgroundColor === 'white') {
      if (props.player === 1) {
        setBackgroundColor('red');
      } else if (props.player === 2) {
        setBackgroundColor('blue');
      }
      props.playerCallback();
    }
  }
  return (
    <div
      className='Tile'
      onClick={changeColor}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {props.val}
    </div>
  );
}

export default Tile;
