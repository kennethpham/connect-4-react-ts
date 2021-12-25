import { FC, useState } from 'react';
import Board from './Board';

const Game: FC = () => {
  const [player, setPlayer]
    : [number, React.Dispatch<React.SetStateAction<number>>]
    = useState<number>(1);
  const playerCallback = (): void => {
    if (player === 1) {
      setPlayer(2);
    }
    else {
      setPlayer(1);
    }
  }
  return(
    <div className='Game'>
      <p>Player {player}'s Turn</p>
      <Board player={player} playerCallback={playerCallback}/>
    </div>
  );
}

export default Game;
