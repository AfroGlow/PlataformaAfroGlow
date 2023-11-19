import Games from '../../Games/CoversGames/Game';
import './CoverOne.css';

const CoverOne = () => {
    return(
        <section className='container-cover-one'>
            <Games iconSound={'icon-sound-white.svg'} titleGame={'Conhecendo os cachos'} ButtonGame={'button-game-1.svg'} />
        </section>
    )
}

export default CoverOne