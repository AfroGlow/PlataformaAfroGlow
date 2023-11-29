import "./Footer.css"

function Footer() {

    return (
        <div className="footer">
            <div className="footer-up">
                <p>Home</p>
                <p>Planos</p>
                <p>Sobre</p>
                <img src="../Logo-afroglow-preto.png" alt="" />
                <p>Login</p>
                <p>Atendimento</p>
                <p>SAC</p>
            </div>
            <div className="footer-hr">
            <hr />
            </div>
            <div className="footer-down">
            <div className="footer-p">
            <p>© AfroGlow | todos os direitos reservados | 2023</p>
            </div>
            <div className="footer-icons">
             <a href="https://www.linkedin.com/company/afroglow2023/"> <img src="../linkedin.png" alt="" /> </a> 
             <a href="https://www.tiktok.com/@afroglow_"><img src="../tiktok.png" alt="" /></a>
             <a href="https://www.instagram.com/afroglow__/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="> <img src="../instagram.png" alt="" /> </a>
             <a href="https://www.youtube.com/@AfroGlow"> <img src="../youtube.png" alt="" /> </a>
            </div>
            </div>
        </div>
    )
}

export default Footer
