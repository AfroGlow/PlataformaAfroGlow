import "./TextStepByStep.css"
import HeaderResponsible from "../HeaderResponsible/HeaderResponsible"
import LeftSideResponsible from "../LeftSideResponsible/LeftSideResponsible"
import ButtonSteps from "../ButtonSteps/ButtonSteps"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"



function TextStepByStep({ props_img_title, props_alt_title,props_p_title, props_iframe, props_img, props_alt,props_img2, props_alt2, props_products, props_products2,props_title1, props_title2, props_title3, props_title4, props_p, props_p2, props_p3, props_p4, props_span1, props_span2, props_span3, props_span4, }) {

    return (
        <>
            <div className='step-by-step'>
                <LeftSideResponsible />
                <HeaderResponsible />
            </div>

            <div className="container-step-by-step">
                <div className="title-tutorials-lavagem">
                    <img src={props_img_title} alt={props_alt_title} />
                    <p>{props_p_title}</p>
                </div>
                <div className="video-step-by-step">
                    <iframe width="650" height="405" src={props_iframe}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; fullscreen"></iframe>
                </div>
                <div className="text-step-by-step">
                    <div className="title-step-by-step">
                        <p>Você vai precisar de:</p>
                    </div>
                    <div className="recomend-step-by-step">
                        <p>Produtos recomendados</p>
                    </div>
                    <div className="img-step-by-step">
                        <img src={props_img }alt={props_alt} />
                        <img src={props_img2} alt= {props_alt2}/>
                    </div>
                    <div className="products-step-by-step">
                        <p>{props_products} <span>{props_products2}</span></p>
                    </div>
                    <div className="content-steps">
                        <div className="title-steps">
                            <p><span>Passo 1</span> {props_title1}</p>
                        </div>
                        <div className="explanation-step-by-step">
                            <p>{props_p} <span> {props_span1}</span></p>
                        </div>
                        <div className="title-steps">
                            <p><span>Passo 2</span> {props_title2}</p>
                        </div>
                        <div className="explanation-step-by-step">
                            <p>{props_p2} <span> {props_span2}</span></p>
                        </div>
                        <div className="title-steps">
                        <p><span>Passo 3</span> {props_title3}</p>
                        </div>
                        <div className="explanation-step-by-step">
                        <p>{props_p3} <span> {props_span3}</span></p>
                        </div>
                        <div className="title-steps">
                            <p><span>Passo 4</span>{props_title4}</p>
                        </div>
                        <div className="explanation-step-by-step">
                        <p>{props_p4} <span> {props_span4}</span></p>
                        </div>
                    </div>

                </div>

                <div className="button-steps">
                    <ButtonSteps />

                    <Link to="/notas">
                    <img className="notes-img-step" src="../anotacao-icone.svg" alt="" />
                    </Link>
                </div>

                
            </div>
           
           
        </>
    )
}

export default TextStepByStep