import { Link } from 'react-router-dom';
import './Game.css';


const Games = ({iconSound, titleGame, ButtonGame}) => {
    return(
        <section className='container-games'>
                <Link to="/perfilcrianca"><img className='back-games' src="icon-button-left.svg" alt=""  style={{ textDecoration: 'none' }}/></Link>
            <article className='secondary-container-games'>
                <div className='sound-games'>
                    <img src={iconSound} alt={iconSound} />
                    <p>Aumente o volume</p>
                </div>
                <h3>{titleGame}</h3>
                <a href=""><img className='button-games' src={ButtonGame} alt={ButtonGame} /></a>
            </article>
        </section>
    )
}

export default Games