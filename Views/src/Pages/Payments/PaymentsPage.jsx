import React, { useState } from 'react'
import "./PaymentsPage.css"
import { Link } from 'react-router-dom';
import ModalFreePlan from './ModalFreePlan/ModalFreePlan';
import Footer from '../../components/Footer/Footer';




const PaymentsPage = () => {
  return (
    <>
      <div className="custom-plans" id='custom-plans'>
        <h2>Escolha seu plano</h2>
        <div className="custom-plans-cards">
    <div className="custom-plans-card-content">

      <div className="custom-plans-value">
        <p>Plano Basic</p>
        <p className='custom-plans-value-money'>Gratuito</p>
      </div>

      <div className='custom-plans-content'>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso a tutoriais</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso limitado os jogos</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="block.svg" alt="botão de ok" />
          <p>Inteligência Artificial</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="block.svg" alt="botão de ok" />
          <p>Podcasts</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="block.svg" alt="botão de ok" />
          <p>Notas</p>
        </div>
      </div>
      <div><ModalFreePlan/></div>
    </div>

    <div className="custom-plans-card-content">

      <div className="custom-plans-value">
        <p>Plano Premium</p>
        <p className='custom-plans-value-money'>R$ 19,99<span>/Mês</span></p>
      </div>

      <div className='custom-plans-content'>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso a tutoriais</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso aos jogos</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Inteligência Artificial</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Podcasts</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Notas</p>
        </div>
      </div>

      <Link to="/pagamentoplanopremium"><button><a href="">Assinar</a></button></Link>
    </div>

    <div className="custom-plans-card-content">

      <div className="custom-plans-value">
        <p>Plano Anual</p>
        <p className='custom-plans-value-money'>R$ 199,99<span>/Ano</span></p>
      </div>

      <div className='custom-plans-content'>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso a tutoriais</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Acesso aos jogos</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Inteligência Artificial</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Podcasts</p>
        </div>
        <div className='custom-plans-content-option'>
          <img src="check.svg" alt="botão de ok" />
          <p>Notas</p>
        </div>
      </div>

      <Link to="/pagamentoplanoanual"><button><a href="">Assinar</a></button></Link>
    </div>
  </div>
</div>
<Footer/>
      </>
    );
  };
  
  export default PaymentsPage;