import { Link } from "react-router-dom"
import "./CardsVideos.css"

function CardsVideos({ props_img, props_alt, props_p, props_p2, props_video }) {

    return (
        <div className="card-video-responsible">
            <img className="highlight-tutorials" src={props_img} alt={props_alt} />
            <p>{props_p}</p>
            <div className="time-tutorials">
                <div className='button-watch'>
                    <Link to={props_video}> <button>Assistir</button> </Link>
                </div>
                <div className="button-tutorials-videos">
                    <img
                        className="icone-relogio"
                        src="relogio-icone.png" alt="ícone de relógio azul" />
                    <p>{props_p2}</p>
                </div>
            </div>
        </div>
    )
}

export default CardsVideos








