import './TelaFinal.css'
import InputTelaFinal from './components/inputTelaFinal/inputTelaFinal'
import { Outlet, Link } from "react-router-dom";


function TelaFinal(){
    return(
        <>
        <Link to="/Form3"><img src="./botaoEsquerda.svg" alt="" /></Link>
        <div className='principal'>
        <div className='tituloImg'>
       <img src="./avatar(9).png" alt="" />
         <p  className='tituloImgP'>Gabriela, a condição do seu cabelo é: </p>
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
         
         <div className='inputsGrupo'>
         <h4>Peça ja sua box!</h4>
         
          <InputTelaFinal props_placeholder={"Cep"}/>
          <InputTelaFinal props_placeholder={"Estado"}/>
          <InputTelaFinal props_placeholder={"Cidade"}/>
          <InputTelaFinal props_placeholder={"Bairro"}/>
          <InputTelaFinal props_placeholder={"Logradouro"}/>
          
          </div>
          <div className='alinharBtn'>
          <button className='btnAmarelo'>Calcular frete</button>
          </div>
        </>
    )
} export default TelaFinal