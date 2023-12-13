import Tutorials from '../../Games/TutorialsGames/Tutorials'
import './TutorialThree.css';
import { Link } from 'react-router-dom';

const TutorialThree = () => {
    return(
        <Link to="/jogo3tela4">
            <section className='container-tutorial-three'>
                <Tutorials  Images={"icon-memory-game-tutorials.svg"} Images2={"icon-bright-tutorials.svg"} Instructions={"Encontre os os pares de finalização e penteados"} Instructions2={"Ajude a finalizar os cachinhos brilhantes"} BackgroundButton={"#C9A5FF"} Button={"INICIAR"}/>
            </section>
        </Link>
    )
}

export default TutorialThree
