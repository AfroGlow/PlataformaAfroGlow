import './GameTwoGame.css'
import React from 'react';
import { Link } from 'react-router-dom';

const GameTwoGame = () => {
  
  return (
    <div className='finishGameTwo'>
      <img src="logoWhite.png" alt="logo afroglow com cor branca" />
     <h2 className='titleFinishGameTwo'>Mandou bem!</h2>  
     <p>Agora os cachinhos estão limpos e brilhantes.</p>
     <img src="emojiFinishGameTwo.svg" alt="" />
     <Link to="/perfilcrianca">
        <button className="nextPageButton">
          Avançar
        </button>
      </Link>
    </div>
  );
   
  
};

export default GameTwoGame;
