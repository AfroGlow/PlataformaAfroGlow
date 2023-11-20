import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Form1.css'
import Form from './components/form/form'
import InputForm from './components/inputForm/input-form'
import { Outlet, Link } from "react-router-dom";


function Form1() {
 

  return (
    <div>
    
    
    <div className='alinhaCentro'>
      <p className='subtitulo-form'>Pergunta1/3</p>
      </div>
     <h1 className='titulo-form'>Qual e a curvatura do seu fio?</h1>


  <div className='background-form'>
     <Form props_img={'./img.svg'} props_label={"Liso (sem ondulação)"} />
     <Form props_img={'./imgperfil2.svg'} props_label={"Ondulado (em forma de S)"} />
     <Form props_img={'./imgperfil3.svg'} props_label={"Cacheado (encaracolado)"} />
     <Form props_img={'./imgperfil4.svg'} props_label={"Crespo (cachos fechados)"} />
  </div>
 
  <div className='alinhaCentro'>
  <Link to="/Form2"> <InputForm/> </Link>
  </div>
     <Outlet/>
  
    </div>

  )
}

export default Form1
