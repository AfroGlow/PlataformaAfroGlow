import React, { useState } from 'react'
import "./Payments.css"
import Credit from './CreditDebit/Credit';
import Debit from './CreditDebit/Debit';
import DetailsProductFree from './DetailsProduct/DetailsProductFree';
import Pix from './Pix/Pix';
import { Link } from 'react-router-dom';



const PaymentsFree = () => {

  const [page, setPage] = useState(<Credit />);

  const replacementCredit = () => {
    setPage(<Credit />);
  };

  const replacementDebit = () => {
    setPage(<Debit />);
  };

  const replacementPix = () => {
    setPage(<Pix />);
  };

  return (
    <div>
      <header className='paymentFormHeader'>
      <Link to="/"><img src="botaoVoltar.svg" alt="" /></Link>
        <h2>Voltar</h2>
      </header>
      <main>
      <div className='paymentContentMain' >
      <div className='paymentContainerOne'>
          <h2 className='paymentData'>Insira as informações de pagamento</h2>
          <p className='paymentDataTextP'>Seu Metodo de Pagamento</p>
          <img src="bandeirasCartoes.png" alt="imagem das bandeiras dos cartões" className="imgCard" />
          <br />
          <div>
          <button onClick={replacementCredit} className='btnCardPayment'> 
            <div className='buttonContent'>
              <img src="iconCartao.svg" alt="icone do cartao" />
              <p>Credito</p>
            </div>
          </button>
          <button onClick={replacementDebit} className='btnCardPayment'>
          <div className='buttonContent'>
              <img src="iconCartao.svg" alt="icone do cartao" />
              <p>Debito</p>
            </div>
          </button>
          <button onClick={replacementPix} className='btnCardPayment'>
          <div className='buttonContent'>
              <img src="iconPix.svg" alt="icone do cartao" />
              <p>Pix</p>
            </div>
          </button>
          </div>

          {page}
        </div>

      <DetailsProductFree />
      
      </div>
        
      </main>
    </div>
  )
}

export default PaymentsFree
