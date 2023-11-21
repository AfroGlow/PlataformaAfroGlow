import { Link } from "react-router-dom"
import "./LeftSideResponsible.css"


function LeftSideResponsible() {

    return (
        <div className="left-side-tutorials">
            <img
                src="house-icone.svg"
            />
            <p>Home</p>
            <Link to='/midias'>
            <img
                src="midia-icone.svg"/>
                </Link>
            <p>Mídias</p>
                <img src="notas-icone.svg" alt="Ícone de notas" />
            <p>Notas</p>
            <img
                src="ia-icone.svg"
            />
            <p className="IA">I A</p>
        </div>
    )
}

export default LeftSideResponsible