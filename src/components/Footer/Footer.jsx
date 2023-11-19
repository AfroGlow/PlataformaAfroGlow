import "./Footer.css"

function Footer() {

    return (
        <div className="footer">
            <div className="footer-up">
                <a href=""><p>Home</p></a>
                <a href=""><p>Planos</p></a>
                <a href=""><p>Sobre</p></a>
                <a href=""><img src="../Logo-afroglow-preto.png" alt="" /></a>
                <a href=""><p>Login</p></a>
                <a href=""><p>Atendimento</p></a>
                <a href=""><p>SAC</p></a>
                
            </div>
            <div className="footer-hr">
                <hr />
            </div>
            <div className="footer-p">
                <p>© AfroGlow | todos os direitos reservados | 2023</p>
                <div>
                    <a href=""><img src="linkedin.svg" alt="" /></a>
                    <a href=""><img src="tiktok.svg" alt="" /></a>
                    <a href=""><img src="instagram.svg" alt="" /></a>
                    <a href=""><img src="youtube.svg" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
