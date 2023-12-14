import { Link } from 'react-router-dom'
import ArrowButton from '../../components/ButtonArrow/BtnArrow'
import './EditProfile.css'
import  ImageHandlerChild from '../EditProfileChild/ImageHandlerChild/ImageHandlerChild'
import ImageHandlerParents from '../EditProfileParents/ImageHandler/ImageHandlerProfile'

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
    <Link to="/editarresponsavel" className='link-router'>
     <div className="parents-profile">
            <h2 className='name-profile'>Página Responsável</h2>
            <ImageHandlerParents defaultImage="perfil-avt-adult-1.png" className="img-profile-parents"/>
            <img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit'/>
        </div>
        </Link>
   <Link to="/editarcrianca" className='link-router'>
      <div className="children-profile">
      <h2 className='name-profile'>Página Crianças</h2>
      < ImageHandlerChild defaultImage="perfil-avt-1.png" className="img-profile img-profile-child" />
        <img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit' />
      </div>
      </Link>
    </div>
    </section>
  </body>
  )

}

export default EditarPerfil