import "./ScreenFour.css";
import ButtonDrawGames from '../../../components/ButtonDrawGame/ButtonDrawGames'
import { Link } from "react-router-dom";
Link

const ScreenFour = () => {
  return (
    <>
      <div className="container-screen4-game1">
        <div className="img-screen4-game1">
          <img src="../public/avatar-menina-estrela.png" alt="" />
          <div className="section-screen4">
            <div className="logo-screen4" >
              <img src="../public/logo-branco-afroglow.png" alt="" />
              </div>
            <div className="text-screen4">
              <h1 className="title-screen4">Parabéns Lili!</h1>
              <p className="P-screen4">Você brilhou, seus desenhos estão incríveis</p>
              <img className="emoji-screen4" src="../public/vetor-emoji.png" alt="" />
              <Link to="/perfilcrianca">
                <ButtonDrawGames props_button_draw={"Finalizar"} />
              </Link>
                        </div>
                        </div>
                        <img className="img2-screen4" src="../public/avatar-menino-estrela.png" alt="" />
            
        </div>
      </div>
      
    </>
  );
};

export default ScreenFour;
