import { FC } from 'react';
import Game from './Game';
import '../styles/Homepage.css';

const Homepage: FC = () => {
  return(
    <div className='Homepage'>
      <div className='Homepage-header'>
        <h1><p>Connect-4</p></h1>
      </div>
      <Game />
    </div>
  )
}

export default Homepage;
