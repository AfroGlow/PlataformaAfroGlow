import Input from "../../components/Input/input"
import './ChildRegistration.css'
import LogoA from '/public/Logo.svg'
import UniversalButton from "../../components/Button/Button"
import { Link } from "react-router-dom"
import InputSelect from "../../components/Input/InputSelect"

function CadastroC() {
    return (
        <body className="bg-register">
            <section className="container-register">
                <div className="info">
                    <Link to="/">
                        <img src={LogoA} alt="" className="logo" />
                    </Link>
                    <h2 className="subtitle">Para finalizar, preencha os dados da criança</h2>
                </div>
                <div className="forms-center">
                    <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} PlaceH={'Insira seu Nome'} />
                    <Input label={'Data de Nascimento'} labelFor={'data'} type={'date'} id={'data'} PlaceH={'00/00/0000'} />
                    <InputSelect />
                </div>
                <div className="btn-register">
                    <Link to="/login" className="link-router"><UniversalButton propsBtn={'Cadastre-se'} /></Link>
                </div>
            </section>
        </body>
    )
}

export default CadastroC