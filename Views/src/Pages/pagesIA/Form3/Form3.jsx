
import './Form3.css'
import Form from '../components/form/form'
// import InputForm from '../components/inputForm/input-form'
import { Outlet, Link } from "react-router-dom";
import ModalAi from '../components/modal/modal'


function Form3() {


  return (

    <>
      <Link to="/Form2"><img className='imgBack' src="./botaoEsquerda.svg" alt="" /></Link>
      <div className='align-center'>

        <div className='alinhaCentro'>
          <p className='subtitulo-form'>Pergunta3/3</p>
        </div>
        <h1 className='titulo-form'>Você está em transição capilar?</h1>
        <p className='subtitulo-form3'>A transição capilar é o processo de abandono de químicas de alisamento e relaxamento, com o objetivo de retornar ao cabelo com a sua curvatura natural. Ela começa no dia da última aplicação de química até o dia do corte de todas as pontas alisadas.</p>

      <form action="">
        <div className='background-form'>
          <div className='align-row'>
            <Form props_img={'./certosim.svg'} props_label={"Sim"} />
            <Form props_img={'./erradoerro.svg'} props_label={"Não"} />
          </div>


        </div>
        <div className='alinhaCentro'>
         <ModalAi/>
        </div>
        </form>
        <Outlet />
      </div>
      
      
    </>
  )
}

export default Form3
