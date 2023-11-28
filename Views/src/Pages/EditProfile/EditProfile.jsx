import { Link } from 'react-router-dom'
import ArrowButton from '../../Components/ButtonArrow/BtnArrow'
import './EditProfile.css'
function EditarPerfil(){
  return(
  <body className='bg-edit'>
    <section className='container-profiles'>
    <Link to="/perfil" className='link-router'>
    <ArrowButton props_arrow={'Voltar'} />
    </Link>
    <div className='info-edit'>
      <h2 className='title-page'>Selecione o perfil que deseja editar?</h2>
    </div>
    <div className="profiles">
    <Link to="/editparents" className='link-router'>
     <div className="parents-profile">
            <h2 className='name-profile'>Página Responsável</h2>
            <img src="../public/img-responsavel-g.png" alt="Avatar mulher parda, com cabelo crespo preto, blusa amarela e brincos" className='img-parents'/>
            <img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit'/>
        </div>
        </Link>
   <Link to="/editchild" className='link-router'>
      <div className="children-profile">
      <h2 className='name-profile'>Página Crianças</h2>
        <img src="../public/img-criança-g.png" alt="Avatar negro, com cabelo cacheado preto e com blusa amarela" />
        <img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit' />
      </div>
      </Link>
    </div>
    </section>
  </body>
  )

}

export default EditarPerfil