import "./Footer.css"

function Footer() {

    return (
        <div className="footer footer-c">
            <div className="footer-up">
            <a href="/">Home</a>
                <a href="#plans">Planos</a>
                <a href="/sobrenos">Sobre</a>
                <a href="/">
                    <img src="../Logo-afroglow-preto.png" alt="Logo da AfroGlow (rosto com cabelo afro e um pente garfo" />
                </a>
                <a href="/login">Login </a>
                <a href="/faleconosco">Atendimento </a>
                <a href="https://wa.me/5511912672965?text=Fale+Conosco+" target="_blank" rel="noopener noreferrer">SAC </a>
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
