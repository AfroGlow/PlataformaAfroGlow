import './TelaFinal.css'
import InputTelaFinal from './components/inputTelaFinal/inputTelaFinal'
import InputFormSmall from './components/inputTelaFinal/input-form-small'
import { Outlet, Link } from "react-router-dom";



function TelaFinal() {
  return (
    <>
      <Link to="/Form3"><img className='imgBack' src="./botaoEsquerda.svg" alt="" /></Link>
      <div className='principal'>
        <div className='tituloImg'>
          <img src="./avatar(9).png" alt="" />
          <p className='tituloImgP'>Gabriela, a condição do seu cabelo é: </p>
        </div>
        <h4>Levemente Danificado</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, tortor sit amet ultrices tincidunt, nulla purus tristique mauris, sit amet faucibus ligula mi eget ante. In vel libero id justo dignissim condimentum. Maecenas nec massa id odio accumsan tristique. Nullam eget euismod tortor. Sed euismod, justo ac iaculis tincidunt, erat lorem rhoncus tellus, sit amet laoreet libero ipsum id nunc.</p>
        <div className='alinharBtn'>
          <button className='btnAmarelo'>Refazer avaliação</button>
        </div>
      </div>

      <h4>Não se preocupe, podemos ajudar!</h4>
      <div className='alinharBox'>
        <img src="./glowBox.png" className='imgBox' alt="" />
      </div>
      <p className='pBox'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor, tortor sit amet ultrices tincidunt, nulla purus tristique mauris, sit amet faucibus ligula mi eget ante. In vel libero id justo dignissim condimentum. Maecenas nec massa id odio accumsan tristique. Nullam eget euismod tortor. Sed euismod, justo ac iaculis tincidunt, erat lorem rhoncus tellus, sit amet laoreet libero ipsum id nunc.</p>

      <h4 className='inputsGroupH4'>Peça já sua glowBox!</h4>

      <div className='inputsGroup'>

        <img src="./imgTelaFinalMenino.svg" alt="" />
        <div className='align-flex'>
          <div className='flex-row-small'>
            <InputFormSmall props_placeholder={"Cep"} />
            <InputFormSmall props_placeholder={"Estado"} />
          </div>
          <div className='flex-row-small'>
            <InputFormSmall props_placeholder={"Cidade"} />
            <InputFormSmall props_placeholder={"Bairro"} />
          </div>
          <div className='flex-row-big'>
            <InputTelaFinal props_placeholder={"Logradouro"} />
          </div>
        </div>
      </div>
      <div className='alinharBtn'>
        <button className='btnAmarelo'>Calcular frete</button>
      </div>
    </>
    
  )
} export default TelaFinal

