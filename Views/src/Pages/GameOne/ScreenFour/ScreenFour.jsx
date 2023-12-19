import "./ScreenFour.css";
import { Link } from "react-router-dom";


const ScreenFour = () => {
  return (
    <>
      <div className='finishGameOne'>
    <img src="logoWhite.png" alt="logo afroglow com cor branca" />
   <h2 className='titleFinishGameOne'>Parabéns, Lili!</h2>  
   <p>Você brilhou, seus desenhos estão incríveis</p>
   <img src="emojiFinishGameTwo.svg" alt="" />
   <Link to="/perfilcrianca">
      <button className="Button-game-One">
        FINALIZAR
      </button>
    </Link>
  </div>
    </>
  );
  }
export default ScreenFour;
