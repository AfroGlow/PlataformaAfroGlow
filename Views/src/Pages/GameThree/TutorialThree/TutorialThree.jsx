import Tutorials from '../../Games/TutorialsGames/Tutorials'
import './TutorialThree.css'

const TutorialThree = () => {
    return(
        <section className='container-tutorial-three'>
            <Tutorials  Images={"icon-memory-game-tutorials.svg"} Images2={"icon-bright-tutorials.svg"} Instructions={"Encontre os os pares de finalização e penteados"} Instructions2={"Ajude a finalizar os cachinhos brilhantes"} BackgroundButton={"#C9A5FF"} Button={"INICIAR"}/>
        </section>
    )
}

export default TutorialThree
