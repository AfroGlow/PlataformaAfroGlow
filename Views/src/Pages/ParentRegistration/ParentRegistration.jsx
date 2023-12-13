import React, { useState } from 'react';
import { validate } from 'cpf-check';
import Input from "../../Components/Input/input"
import LogoA from '/public/Logo.svg'
import ImgDir from '/public/imagem direita.png'
import InputDuo from "../../Components/Input/InputDuo";
import UniversalButton from "../../Components/Button/Button";
import "./ParentRegistration.css";
import { Link } from "react-router-dom";


function CadastroR() {
    const [cpf, setCpf] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleCpf = (event) => {
        let inputCpf = event.target.value.replace(/\D/g, '');
    
        if (inputCpf.length > 11) {
          inputCpf = inputCpf.slice(0, 11);
        }
    
        inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
        setCpf(inputCpf);
        setIsValid(validate(inputCpf));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const cpfWithoutMask = cpf.replace(/\D/g, '');
        setIsValid(validate(cpfWithoutMask));
        if(isValid){
            alert("CPF inválido. Por favor, verifique e tente novamente.")
        } else {
            // lógica adicional para lidar com o envio do formulário
            window.location.href = "/cadastrocrianca";
        }
      };

    return (    
        <section className="containerSection">

            <div className="forms-left">

                <div className="info-register">
                    <img src={LogoA} alt="Logo" className="logo" />
                    <h2 className="subtitle">Olá,seja bem vindo(a)!</h2>
                    <p className="paragraf">Crie uma conta para iniciar sua jornada de experiencia conosco.</p>
                </div>

                <div className="forms-register">
                    <form action="" onSubmit={handleSubmit} method='post'>
                        <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} PlaceH={'Insira seu Nome'} />
                        <Input label={'Nome Social'} labelFor={'socialName'} type={'text'} id={'socialName'} PlaceH={'Nome Social'} />
                        <Input label={'E-mail'} labelFor={'email'} type={'text'} id={'email'} PlaceH={'Email'} />
                        <InputDuo label={'CPF'} labelFor={'cpf'} type={'text'} id={'userCpf'} PlaceH={'CPF'} value={cpf} onChange={handleCpf} label2={'Telefone'} labelFor2={'tel'} type2={'tel'} id2={'telUsuario'} PlaceH2={'Telefone'} />
                        {!isValid && formSubmitted && <p style={{ color: 'red' }}>CPF inválido</p>}
                        <Input label={'Senha'} labelFor={'password'} type={'password'} id={'userPassword'} PlaceH={'Crie uma senha'} />
                        <div className="buttonRegister">
                            <UniversalButton Link propsBtn={'Cadastre-se'} type="submit" />
                        </div>
                    </form>
                </div>
                    <div className="btn-register">
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