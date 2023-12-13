import "./CardsMedia.css"

function CardsMedia ({props_img_media, alt_img_media, props_h1_media, props_p_media,props_link_media, alt_alt_media}) {
    return(
        <div className="cards-media">
           <a href={props_link_media}target="_blank" rel="noopener noreferrer" ><img src={props_img_media} alt={alt_alt_media} /> </a>
            <h1>{props_h1_media}</h1>
            <p>{props_p_media}</p>
        </div>
    )
}
export default CardsMedia