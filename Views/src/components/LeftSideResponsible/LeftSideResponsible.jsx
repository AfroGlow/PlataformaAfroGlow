import { Link } from "react-router-dom"
import "./LeftSideResponsible.css"


function LeftSideResponsible() {

    return (
        <div className="left-side-tutorials">
            <Link to='/perfilresponsavel'> 
            <img
                src="house-icone.svg"/>
                </Link>
            <p>Home</p>
            <Link to='/midias'>
            <img
                src="midia-icone.svg"/>
                </Link>
            <p>Mídias</p>
            <Link to='/notas'>
                <img src="notas-icone.svg" alt="Ícone de notas" />
                </Link>
            <p>Notas</p>

            <Link to='/ia'>
            <img
                src="ia-icone.svg"
            />
            </Link>
            <p className="ia-left">I A</p>
        </div>
    )
}

export default LeftSideResponsible