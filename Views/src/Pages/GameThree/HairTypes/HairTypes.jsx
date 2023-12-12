import './HairTypes.css';
import { Link } from 'react-router-dom';

const HairTypes = () => {
    return(
        <body >
            <Link to="/jogo3"><img className='back-games' src="icon-button-left.svg" alt="" /></Link>
            <section className='container-hair-types'>
                <h2>Várias formas de deixar os seus cachinhos ainda mais redondinhos!</h2>
                <img src="portrait-hair-types.png" alt="Tipos de cabelo com ondulação" />
                <Link to="/tutorial3"><button>AVANÇAR</button></Link>
            </section>
        </body>
    )
}

export default HairTypes