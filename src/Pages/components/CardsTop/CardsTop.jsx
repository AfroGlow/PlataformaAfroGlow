import "./CardsTop.css"
function CardsTop({ props_img, props_alt, props_p, props_p2, props_p3 }) {

    return (
        <div className="card-tutorials-top">
            <img className="card-tutorials-top-img" src={props_img} alt={props_alt} />
            <p>{props_p}<br/>{props_p2}<br/>{props_p3}</p>
        </div>
    )
}

export default CardsTop