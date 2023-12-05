import './CoverThree.css';
import Games from '../../Games/CoversGames/Game';
import { Link } from 'react-router-dom';
Link

const CoverThree = () => {
    return(
        <section className='container-cover-three'>
            <Link to="/jogo3tela2">
                <Games iconSound={'icon-sound-pink.svg'} titleGame= {'Cachinhos definidos'} ButtonGame={'button-game-3.svg'}/> 
            </Link>
        </section>
    )
}

export default CoverThree