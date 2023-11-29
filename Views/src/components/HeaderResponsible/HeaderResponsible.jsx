import "./HeaderResponsible.css"
function HeaderResponsible() {

    return (
        <div className='responsible-header'>
            <img
                className='img-logo-header'
                src='Logo-afroglow-preto.png'
                alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo)"
            />
            <h2>Olá, Lilian</h2>

            <div className="avatar-header">
                <a href="">Sair</a>
                <img
                    className="img-avatar-header"
                    src='avatar-barra.png'
                />
            </div>
        </div>
    )
}

export default HeaderResponsible




