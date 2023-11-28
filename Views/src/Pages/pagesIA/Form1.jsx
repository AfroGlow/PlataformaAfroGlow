import { useState } from 'react'
import './Form1.css'
import { Outlet, Link } from "react-router-dom";
import InputForm from './components/inputForm/input-form';
import Form from './components/form/form';


function Form1() {


  return (
    <div>

      <Link to="ia"><img className='imgBack' src="./botaoEsquerda.svg" alt="" /></Link>
      <div className='alinhaCentro'>
        <p className='subtitulo-form'>Pergunta1/3</p>
      </div>
      <h1 className='titulo-form'>Qual e a curvatura do seu fio?</h1>


      <div className='background-form'>
        <div className='align-row'>
          <Form props_img={'./imgTipoCabeloLiso.svg'} props_label={"Liso (sem ondulação)"} />
          <Form props_img={'./imTipoCabeloOndulado.svg'} props_label={"Ondulado (em forma de S)"} />
        </div>
        <div className='align-row'>
          <Form props_img={'./imgTipoCabeloCacheado.svg'} props_label={"Cacheado (encaracolado)"} />
          <Form props_img={'./imgTipoCabeloCrespo.svg'} props_label={"Crespo (cachos fechados)"} />
        </div>
      </div>

      <div className='alinhaCentro'>
        <Link to="/Form2"> <InputForm /> </Link>
      </div>
      <Outlet />

    </div>

  )
}

export default Form1
