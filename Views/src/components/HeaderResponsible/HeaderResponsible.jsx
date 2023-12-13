import { Link } from "react-router-dom"
import "./HeaderResponsible.css"
import ImageHandlerParents from "../../Pages/EditProfileParents/ImageHandler,jsx/ImageHandlerProfile"
import NewHeaderResponsible from "../NewHeaderResponsible/NewHeaderResponsible"

function HeaderResponsible() {

        return (
            <>
            <div className='responsible-header'>
                <Link to='/'>
                    <img
                        className='img-logo-header'
                        src='Logo-afroglow-preto.png'
                        alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo)"
                    />
                </Link>
                <h2>Olá, Lilian</h2>
    
                <Link to="/perfil">
                    <div className="avatar-header">
                        <a href="/">Sair</a>
                        <ImageHandlerParents defaultImage="perfil-avt-adult-1.png" className="img-profile-parents img-avatar-header" />
                    </div>
                </Link>
    
            </div>
             <div className="new-container-header">
             <NewHeaderResponsible />
             </div>
             </>
    
    )
}

export default HeaderResponsible




