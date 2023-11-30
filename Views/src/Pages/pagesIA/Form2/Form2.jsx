import { useState } from 'react'
import './Form2.css'
import { Outlet, Link } from "react-router-dom";
import InputForm from '../components/inputForm/input-form'
import Form from '../components/form/form';



function Form2() {


  return (
    <div>

      <Link to="/"><img className='imgBack' src="./botaoEsquerda.svg" alt="" /></Link>
      <div className='alinhaCentro'>
        <p className='subtitulo-form'>Pergunta2/3</p>
      </div>
      <h1 className='titulo-form'>Qual é o seu dano principal?</h1>

      <div className='background-form'>
        <div className='align-row'>
          <Form props_img={'./imgdano1.png'} props_label={"Pontas duplas"} />
          <Form props_img={'./imgdano2.svg'} props_label={"Frizz"} />
        </div>
        <div className='align-row'>
          <Form props_img={'./imgdano3.svg'} props_label={"Quebradiço"} />
          <Form props_img={'./imgdano4.svg'} props_label={"Queda"} />
        </div>

      </div>
      <div className='alinhaCentro'>
        <Link to="/Form3"><InputForm  props_value={"PRÓXIMO"}/></Link>
      </div>
      <Outlet />

    </div>

  )
}

export default Form2
