import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Form3.css'
import Form from './components/form/form'
import InputForm from './components/inputForm/input-form'
import { Outlet, Link } from "react-router-dom";


function Form3() {
 
 
  return (
    
    <>  
    <Link to="/Form2"><img src="./botaoEsquerda.svg" alt="" /></Link>
    <div className='align-center'>
    
    <div className='alinhaCentro'>
      <p className='subtitulo-form'>Pergunta1/3</p>
    </div>
     <h1 className='titulo-form'>Você está em transição capilar?</h1>
    

  <div className='background-form'>
     <Form props_img={'./certosim.svg'} props_label={"Sim"} />
     <Form props_img={'./erradoerro.svg'} props_label={"Não"} />
    
     
  </div>
  <div className='alinhaCentro'>
  <Link to="/TelaFinal"><InputForm/></Link>
  </div>
     <Outlet />
    </div>
    </>
  )
}

export default Form3
