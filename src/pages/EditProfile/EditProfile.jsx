import { Link } from 'react-router-dom'
import ArrowButton from '../../Components/ButtonArrow/BtnArrow'
import './EditProfile.css'


function EditProfile(){
  return(
  <body className='bg-edit'>
    <section className='container-profiles'>
    <Link to="/perfil" className='link'>
    <ArrowButton props_arrow={'Voltar'} />
    </Link>
    <div className='info-edit'>
      <h2 className='title-page'>Selecione o perfil que deseja editar?</h2>
    </div>
    <div className="profiles">
      <div className="parents-profile">
        <h2 className='name-profile'>Pagina Responsavel</h2>
        <img src="../public/img-responsavel-g.png" alt="" className='img-parents'/>
        <Link><img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit' /></Link>
      </div>
      <div className="children-profile">
      <h2 className='name-profile'>Pagina Crianças</h2>
        <img src="../public/img-criança-g.png" alt="" />
        <Link><img src="public/icon-pen.svg" alt="Botão editar perfil" className='icon-edit' /></Link>
      </div>
    </div>
    </section>
  </body>
  )

}

export default EditProfile