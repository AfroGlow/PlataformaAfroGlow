import { Link } from "react-router-dom"
import "./LeftSideResponsible.css"


function LeftSideResponsible() {

    return (
        <div className="left-side-tutorials">
            <Link to='/perfilresponsavel'> 
            <img
                src="house-icone.svg" alt="ícone de casa branco"/>
                </Link>
            <p>Home</p>
            <Link to='/midias'>
            <img
                src="midia-icone.svg" alt="ícone de mídias branco"/>
                </Link>
            <p>Mídias</p>
            <Link to='/notas'>
                <img src="notas-icone.svg" alt="Ícone de notas" />
                </Link>
            <p>Notas</p>

            <Link to='/planosia'>
            <img
                src="ia-icone.svg" alt="ícone de inteligência artificial"
            />
            </Link>
            <p className="ia-left">IA</p>
        </div>
    )
}

export default LeftSideResponsible