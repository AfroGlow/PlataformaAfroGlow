import Tutorials from "../../Games/TutorialsGames/Tutorials"
import "./TutorialTwo.css"
import { Link } from 'react-router-dom'

const TutorialTwo = () => {
    return(
        <section className="container-tutorial-two">
            <Link to="/jogo2-jogoShampoo"  style={{ textDecoration: 'none' }}>
            <Tutorials Images={"icon-bath-tutorials.png"} Images2={"icon-comb-tutorials.png"} Instructions={"Esfregue os cabelos até ficarem limpinhos"} Instructions2={"Esfregue por 5 segundos para passar de fase!"} BackgroundButton={"#FAC015"}  Button={"INICIAR"} />
            </Link>
        </section>
    )
}

export default TutorialTwo