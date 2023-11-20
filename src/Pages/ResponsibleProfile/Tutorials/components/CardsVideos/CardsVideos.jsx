import "./CardsVideos.css"
function CardsVideos({ props_img, props_alt, props_p, props_p2 }) {

    return (
        <div className="card-video">
            <img className="highlight-tutorials" src={props_img} alt={props_alt} />
            <p>{props_p}</p>
            <div className="time-tutorials">
                <div className='button-assistir'>
                    <button>Assistir</button>
                </div>
                <div className="button-tutorials">
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








