import { Link } from 'react-router-dom';
import Games from '../../Games/CoversGames/Game';
import './CoverTwo.css';


const CoverTwo = () => {
    return(
        <section className='container-cover-two'>
          
           <Link to="/tutorial2"  style={{ textDecoration: 'none' }}>
               <Games iconSound={'icon-sound-yellow.svg'} titleGame= {'Bolinhas de diversão'} ButtonGame={'button-game-2.svg'}/>
           </Link>
           
        </section>
    )
}

export default CoverTwo