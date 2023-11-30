import { Link } from 'react-router-dom';
import Games from '../../Games/CoversGames/Game';
import './CoverFive.css';


const CoverFive = () => {
    return(
        <section className='container-cover-five'>
            <Link to='/tutorial5'>
                <Games  iconSound={'icon-sound-brown.svg'} titleGame= {'Fábrica de sonhos'} ButtonGame={'button-game-5.svg'}/>
            </Link>
        </section>
    )
}

export default CoverFive