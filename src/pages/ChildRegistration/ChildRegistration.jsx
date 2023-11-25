import Input from "../../Components/Input/input"
import './ChildRegistration.css'
import LogoA from '/public/Logo.svg'
import UniversalButton from "../../Components/Button/Button"
import { Link } from "react-router-dom"
import InputSelect from "../../Components/Input/InputSelect"

function CadastroC() {
    return (
        <body className="bg-register">
            <section className="container-register">
                    <div className="info">
                        <img src={LogoA} alt="" className="logo" />
                        <h2 className="title-register">Para finalizar, preencha os dados da criança</h2>
                    </div>
                    <div className="forms-center">
                        <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} PlaceH={'Insira seu Nome'} />
                        <Input label={'Data de Nascimento'} labelFor={'data'} type={'date'} id={'data'} PlaceH={'00/00/0000'} />
                        <InputSelect/>
                    </div>
                    <div className="btn-register">
                    <Link to="/login" className="link-router"><UniversalButton Link propsBtn={'Cadastre-se'} /></Link>
                    </div>
            </section>
        </body>
    )
}

export default CadastroC