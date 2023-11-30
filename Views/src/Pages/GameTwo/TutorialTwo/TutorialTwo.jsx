import Tutorials from "../../Games/TutorialsGames/Tutorials"
import "./TutorialTwo.css"
import { Link } from 'react-router-dom'

const TutorialTwo = () => {
    return(
        <section className="container-tutorial-two">
            <Tutorials Images={"icon-bath-tutorials.png"} Images2={"icon-comb-tutorials.png"} Instructions={"Esfregue os cabelos até ficarem limpinhos"} Instructions2={"Desembaraçe os fios da pontinha até a raiz"} BackgroundButton={"#FAC015"}  Button={"INICIAR"} />
        </section>
    )
}

export default TutorialTwo