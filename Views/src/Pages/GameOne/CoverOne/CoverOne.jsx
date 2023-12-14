import { Link } from 'react-router-dom';
import Games from '../../Games/CoversGames/Game';
import './CoverOne.css';
Link

const CoverOne = () => {
    return(
        <section className='container-cover-one'>
            <Link to="/tutorial1" style={{ textDecoration: 'none' }}>
                <Games iconSound={'icon-sound-white.svg'} titleGame={'Conhecendo os cachos'} ButtonGame={'button-game-1.svg'} />
            </Link>
        </section>
    )
}

export default CoverOne