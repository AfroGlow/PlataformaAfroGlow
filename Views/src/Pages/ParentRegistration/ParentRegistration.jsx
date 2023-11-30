import Input from "../../Components/Input/input"
import LogoA from '/public/Logo.svg'
import ImgDir from '/public/imagem direita.png'
import InputDuo from "../../Components/Input/InputDuo";
import UniversalButton from "../../Components/Button/Button";
import "./ParentRegistration.css";
import { Link } from "react-router-dom";


function CadastroR() {
    return (    
        <section className="containerSection">

            <div className="forms-left">

                <div className="info-register">
                    <img src={LogoA} alt="Logo" className="logo" />
                    <h2 className="subtitle">Olá,seja bem vindo(a)!</h2>
                    <p className="paragraf">Crie uma conta para iniciar sua jornada de experiencia conosco.</p>
                </div>

                <div className="forms-register">
                    <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} PlaceH={'Insira seu Nome'} />
                    <Input label={'Nome Social'} labelFor={'socialName'} type={'text'} id={'socialName'} PlaceH={'Nome Social'} />
                    <Input label={'E-mail'} labelFor={'email'} type={'text'} id={'email'} PlaceH={'Email'} />
                    <InputDuo label={'CPF'} labelFor={'cpf'} type={'number'} id={'userCpf'} maxLength={'14'} PlaceH={'CPF'} label2={'Telefone'} labelFor2={'tel'} type2={'tel'} id2={'telUsuario'} PlaceH2={'Telefone'} />
                    <Input label={'Senha'} labelFor={'password'} type={'password'} id={'userPassword'} PlaceH={'Crie uma senha'} />
            </div>
                    <div className="btn-register">
                        <Link to="/cadastrocrianca" className="link-router"><UniversalButton Link propsBtn={'Cadastre-se'} /></Link>
                        <p className="paragrafS">Você já tem uma conta? <Link to={'/login'} className="link-router"><span className="link">Realizar login</span></Link></p>
                    </div>
                </div>
        

            <div className="img-rigth">
                <img src={ImgDir} className="image-rigth" />
            </div>

        </section>


    )
}

export default CadastroR