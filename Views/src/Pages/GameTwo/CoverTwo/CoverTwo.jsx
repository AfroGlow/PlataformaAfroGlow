import Games from '../../Games/CoversGames/Game';
import './CoverTwo.css';

const CoverTwo = () => {
    return(
        <section className='container-cover-two'>
           <Games iconSound={'icon-sound-yellow.svg'} titleGame= {'Bolinhas de diversão'} ButtonGame={'button-game-2.svg'}/>
        </section>
    )
}

export default CoverTwo