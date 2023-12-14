import './FinishGameThree.css';
import React from 'react';
import { Link } from 'react-router-dom';

const FinishGameThree = () => {
    return(
        <div className='finishGameThree'>
      <img src="logoWhite.png" alt="logo afroglow com cor branca" />
     <h2 className='titleFinishGameThree'>Parabéns!</h2>  
     <p>Todos os cachos estão ainda mais redondinhos!</p>
     <img src="emojiFinishGameTwo.svg" alt="" />
     <Link to="/perfilcrianca"  style={{ textDecoration: 'none' }}>
        <button className="Button-game-three">
          FINALIZAR
        </button>
      </Link>
    </div>
    )
}

export default FinishGameThree