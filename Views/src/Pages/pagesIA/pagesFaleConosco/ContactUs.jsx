import { useState } from 'react'
import './ContactUs.css'
import InputSmallContactUs from './components/inputFaleConosco/inputSmallContactUs'
import InputContactUs from './components/inputFaleConosco/inputContactUs'



function ContactUs() {
    return (
        <>
        <Header/>
            <h1 className='title-yellow-contactUs'>Fale Conosco</h1>
            <h5 className='subtitle-contactUs'>Como podemos te ajudar?</h5>
            
            <div className='align-row-contactUs'>
                <div className='align-column-contactUs'>
                    <InputContactUs  props_placeholder={"Nome Completo"}/>
                    <div className='align-row-contactUs'>
                        <InputSmallContactUs props_placeholder={"Email"}/>
                        <InputSmallContactUs props_placeholder={"Telefone"} />
                    </div>
                    <InputContactUs props_placeholder={"Assunto"} />
                    <textarea className='textField-contactUs' placeholder='Mensagem'></textarea>
                    <div className='align-btn-contactUs'>
                    <input className='submit-contactUs' value={"Enviar"} type="submit" />
                    </div>
                </div>
                <img className='img-principal-contactUs' src="./imgCriançaFaleConosco.png" alt="" />
            </div>

            <div className='container-purple-contactUs'>
                <p>Fique por dentro das novidades nas nossas redes sociais</p>
                <div className='align-row-contactUs'>
                <img src="./imgLogoInstagram.png" alt="" />
                <img src="./imgLogoLinkedin.png" alt="" />
                <img src="./imgLogoTiktok.png" alt="" />
                <img src="./imgLogoYoutube.png" alt="" />
                </div>
            </div>
           
        </>

    )
} export default ContactUs

