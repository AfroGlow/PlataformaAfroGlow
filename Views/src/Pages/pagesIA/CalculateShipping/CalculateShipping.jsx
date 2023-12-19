import React, { useState, useEffect } from 'react';
import './CalculateShipping.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';

function CalculateShipping() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    cidade: '',
    estado: '',
    bairro: ''
  });

  const handleInputChange = (event) => {
    const newCep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    setCep(newCep);
  };

  useEffect(() => {
    if (cep.length === 8) {
      buscarCep();
    }
  }, [cep]);

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) {
          alert('CEP não encontrado');
        } else {
          setEndereco({
            logradouro: data.logradouro,
            cidade: data.localidade,
            estado: data.uf,
            bairro: data.bairro
          });
        }
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao buscar o CEP:', error);
      });
  };

  return (
    <>
      <Link to="/Form3">
        <img className="imgBackTelaFinal" src="./botaoEsquerda.svg" alt="" />
      </Link>

      <div className="align-title--column-telaFinal">
        <div className="align-center-title-telafinal">
          <div>
            <h4 className="inputsGroupH4TelaFinal">Peça já sua glowBox!</h4>
          </div>
          <p className="inputsGroupPTelaFinal">Preencha os campos para cálculo do frete e prazo de entrega</p>
        </div>
      </div>
      <div className="inputsGroup">
        <img src="./imgTelaFinalMenino.svg" className='img-calculate-shipping' alt="Menino negro de cabelo cacheado sentado usando um notebook" />
        <div className="align-flex">
          <div className="flex-row-small">
            <input type="text" className='inputTelaFinaSmall' placeholder={'Cep'} value={cep} onChange={handleInputChange}  />
            <input type="text" className='inputTelaFinaSmall' placeholder={'Estado'} value={endereco.estado} />
          </div>
          <div className="flex-row-small">
            <input type="text" className='inputTelaFinaSmall' placeholder={'Cidade'} value={endereco.cidade} />
            <input type="text" className='inputTelaFinaSmall' placeholder={'Bairro'} value={endereco.bairro} />
          </div>
          <div className="flex-row-big">
          <input type="text" className='inputTelaFinal' placeholder={"logradouro"} value={endereco.logradouro}  />
          </div>
        </div>
      </div>
       <div className="alinharBtn">
        <button className="btnAmarelo" onClick={buscarCep}>
          Calcular frete
        </button>
      </div> 
      <Footer/>
    </>
  );
}

export default CalculateShipping;
