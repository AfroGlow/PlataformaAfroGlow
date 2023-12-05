import React from 'react'
import './CareCard.css'

const CareCard = () => {
  return (
    <div>
      <div className="CareCard-container">
        <div className="CareCard-item">
            <img src="comb.png" alt="icone de pente branco" />
            <p className='combText'>Aprenda a cuidar dos cabelos de forma lúdica e divertida</p>
        </div>
        <div className="CareCard-item">
            <img src="family.png" alt="icone de uma familia" />
            <p className='familyText'>Acesse a conteúdos de cuidados com cabelos na página de tutores</p>
        </div>
        <div className="CareCard-item">
            <img src="comb.png" alt="icone de pente branco" />
            <p className='combText'>Receba recomendações de personalizada para cuidados com os cabelos</p>
        </div>
      </div>
    </div>
  )
}

export default CareCard



