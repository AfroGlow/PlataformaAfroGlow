import React from 'react'
import './DetailsProduct.css'

const DetailsProductPlus = () => {
  return (
    <div>
       <div className="paymentContainerTwo">
          <h2>Resumo do Pedido</h2>
          <div>
            <p className='containerTwoSubTitle'>Item do Pedido</p>
            <h3 className='containerTwoProduct'>Plano Plus</h3>
          </div>
          <div>
            <p className='containerTwoSubTitle'>Forma de Pagamento</p>
            <h3 className='containerTwoProduct'>Pagamento online</h3>
          </div>

          <div className='total'>
            <p className='containerTwoSubTitle'>Total a Pagar: <br /> <span>R$ 199,99 </span></p>
          </div>
        </div>
    </div>
  )
}

export default DetailsProductPlus
