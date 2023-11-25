import { Link } from 'react-router-dom'
import EditButton from '../../Components/ButtonEdit/btnEdit'
import LeaveButton from '../../Components/ButtonLeave/btnLeave'
import './Profile.css'


function Perfil(){
  return(
  <body className='bg-profile'>
    <section className='container-profiles'>
    <Link to="/" className='link-router'>
        <LeaveButton props_leave={'Sair'}/>
    </Link>
    <div className='info-edit'>
      <h2 className='title-page'>Quem está acessando?</h2>
      <Link to="/editar" className='link-router'><EditButton/></Link>
    </div>
    <div className="profiles card-1">
      <div className="parents-profile">
        <h2 className='name-profile'>Pagina Responsavel</h2>
        <img src="../public/img-responsavel-g.png" alt="" className='img-parents'/>
      </div>
      <div className="children-profile card-1">
      <h2 className='name-profile'>Pagina Criança</h2>
        <img src="../public/img-criança-g.png" alt="" />
      </div>
    </div>
    </section>
  </body>
  )

}

export default Perfil