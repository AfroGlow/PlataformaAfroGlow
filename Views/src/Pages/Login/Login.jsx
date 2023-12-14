import Input from "../../Components/Input/input"
import ImgEsq from '/public/imagem-esquerda.jpg'
import LogoA from '/public/Logo.svg'
import UniversalButton from "../../Components/Button/Button"
import './login.css'
import { Link } from "react-router-dom"

function Login() {
    return (
        <body className="bg-login">
            <section className="login-container">
                <div className="img-left">
                    <img src={ImgEsq} className="image-left" alt="Imagem decorativa da pagina de login"/>
                </div>
                <div className="forms-rigth">
                    <div className="info-login">
                    <Link to="/">
                            <div className="logo"><img src={LogoA} alt="Logo"/></div>
                    </Link>
                        <h2 className="subtitleL">Fazer login(a)!</h2>
                        <p className="paragrafL">Faça login para embarcar em nosso mundo de diversão</p>
                    </div>
                    <div className="forms-login">
                    <Input label={'E-mail'} labelFor={'email'} type={'text'} id={'email'} PlaceH={'Email'} />
                    <Input label={'Senha'} labelFor={'password'} type={'password'} id={'userPassword'} PlaceH={'Digite sua senha'} />
                    </div>

                    <div className="btn-login">
                    <p className="login-paragraf">Ainda não possui uma conta<Link to='/cadastro' className="link-router"><span className="link-login"> Cadastro</span></Link></p>
                    <Link to="/perfil" className="link-router"><UniversalButton propsBtn={'Fazer login'} /></Link>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default Login