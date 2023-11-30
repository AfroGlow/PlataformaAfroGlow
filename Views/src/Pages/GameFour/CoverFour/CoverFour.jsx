import { Link } from 'react-router-dom';
import Games from '../../Games/CoversGames/Game';
import './CoverFour.css';


const CoverFour = ( ) => {
    return(
        <section className='container-cover-four'>
            <Link to="/tutorial4">
                <Games iconSound={'icon-sound-blue.svg'} titleGame= {'Missão Nutritiva'} ButtonGame={'button-game-1.svg'}/>
            </Link>
        </section>
    )
}

export default CoverFour