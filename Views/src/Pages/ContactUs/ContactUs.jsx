import React from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './ContactUs.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// caso nao funcionar baixe essa dependencia "npm install emailjs-com"

init('yYVQ1FNnnICXJU7Fc');

function ContactUs() {
  const  sendEmail =  (e)  => {
    e.preventDefault();

    emailjs.sendForm('service_qqmaoq1', 'template_rs99tgc', e.target, 'yYVQ1FNnnICXJU7Fc')
      .then((result) => {
        console.log(result.text);
        window.alert('E-mail enviado com sucesso!');
      }, (error) => {
        console.error(error.text);
        window.alert('Erro ao enviar o e-mail.');
      });
  };

  return (
    <>
      <Header />
      <h1 className='title-yellow-contactUs'>Fale Conosco</h1>
      <h5 className='subtitle-contactUs'>Como podemos te ajudar?</h5>

      <form onSubmit={sendEmail}>
        <div className='align-row-contactUs'>
          <div className='align-column-contactUs'>
          <input type="text" className='inputContactUs' name="name" placeholder={"Nome Completo"} required/>
           
            <div className='align-row-contactUs'>
            <input type="text" className='inputSmallContactUs' name="email" placeholder={"Email"} required/>
            <input type="text" className='inputSmallContactUs' name="phone" placeholder={"Telefone"} required/>
              
            </div>
            <input type="text" name="subject" className='inputContactUs' placeholder={"Assunto"} required/>
           
            <textarea className='textField-contactUs' name="message" placeholder='Mensagem' required></textarea>
            <div className='align-btn-contactUs'>
              <input className='submit-contactUs' value={"Enviar"} type="submit" />
            </div>
          </div>
          <img className='img-principal-contactUs' src="./imgCriançaFaleConosco.png" alt="" />
        </div>
      </form>

      <div className='container-purple-contactUs'>
        <p>Fique por dentro das novidades nas nossas redes sociais</p>
        <div className='align-row-contactUs'>
          <div className='alignment-icones-contact-us'>
            <img src="./imgLogoInstagram.png" alt="" />
            <img src="./imgLogoLinkedin.png" alt="" />
            <img src="./imgLogoTiktok.png" alt="" />
            <img src="./imgLogoYoutube.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;