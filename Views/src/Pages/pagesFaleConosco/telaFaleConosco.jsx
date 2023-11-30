import { useState } from 'react'
import './TelaFaleConosco.css'
import  InputFaleConosco from './components/inputFaleConosco/inputFaleConosco'
import InputSmallFaleConosco from './components/inputFaleConosco/inputSmallFaleConosco'








function TelaFaleConosco() {
    return (
        <>
        <Header/>
            <h1 className='title-yellow-faleConosco'>Fale Conosco</h1>
            <h5 className='subtitle-faleConosco'>Como podemos te ajudar?</h5>
            
            <div className='align-row-faleConosco'>
                <div className='align-column-faleConosco'>
                    <InputFaleConosco  props_placeholder={"Nome Completo"}/>
                    <div className='align-row-faleConosco'>
                        <InputSmallFaleConosco props_placeholder={"Email"}/>
                        <InputSmallFaleConosco props_placeholder={"Telefone"} />
                    </div>
                    <InputFaleConosco props_placeholder={"Assunto"} />
                    <textarea className='textField-faleConosco' placeholder='Mensagem'></textarea>
                    <div className='align-btn-faleConosco'>
                    <input className='submit-faleConosco' value={"Enviar"} type="submit" />
                    </div>
                </div>
                <img className='img-principal-faleConosco' src="./imgCriançaFaleConosco.png" alt="" />
            </div>

            <div className='container-purple-faleConosco'>
                <p>Fique por dentro das novidades nas nossas redes sociais</p>
                <div className='align-row-faleConosco'>
                <img src="./imgLogoInstagram.png" alt="" />
                <img src="./imgLogoLinkedin.png" alt="" />
                <img src="./imgLogoTiktok.png" alt="" />
                <img src="./imgLogoYoutube.png" alt="" />
                </div>
            </div>
           
        </>

    )
} export default TelaFaleConosco

