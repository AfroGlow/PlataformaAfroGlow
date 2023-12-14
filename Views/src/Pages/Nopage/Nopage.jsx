import"./Nopage.css"
import UniversalButton from "../../components/Button/Button"
import { Link } from "react-router-dom"

function Nopage(){
    return(
        <body>
            <section className="container-nopage">
                <div className="img-nopage">
                    <img src="avatar-nopage.png" alt="Imagem avatar menina negra cabelo cacheado castanho blusa amarela, rosto triste" />
                </div>
                    <div className="info-nopage">
                        <p>Error</p>
                        <h2 className="subt-nopage">404</h2>
                        <p className="p-nopage">Que pena, essa página não existe ou não pode ser carregada.</p>
                        <Link to="/" className="link-router">
                            <UniversalButton propsBtn={'Voltar para inicio'}/>
                        </Link>
                    </div>
            </section>
        </body>
    )
}

export default Nopage