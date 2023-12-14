import { Link } from 'react-router-dom'
import EditButton from '../../components/ButtonEdit/btnEdit'
import LeaveButton from '../../components/ButtonLeave/btnLeave'
import './Profile.css'
import  ImageHandlerChild from '../EditProfileChild/ImageHandlerChild/ImageHandlerChild'
import ImageHandlerParents from '../EditProfileParents/ImageHandler/ImageHandlerProfile'

function Perfil() {
  return (
    <body className='bg-profile'>
      <section className='container-profiles'>
        <Link to="/" className='router'>
          <LeaveButton props_leave={'Sair'} />
        </Link>
        <div className='info-edit'>
          <h2 className='title-page'>Quem está acessando?</h2>
          <Link to="/editar" className='router'><EditButton /></Link>
        </div>
        <div className="profiles card-1">
          <Link to='/perfilresponsavel' style={{ textDecoration: 'none' }}>
            <div className="parents-profile">
              <h2 className='name-profile'>Página Responsável</h2>
              <ImageHandlerParents defaultImage="perfil-avt-adult-1.png" className="img-profile-parents"/>
            </div>
          </Link>
          <Link to='/perfilcrianca' style={{ textDecoration: 'none' }}>
            <div className="children-profile card-1">
              <h2 className='name-profile'>Página Criança</h2>
              < ImageHandlerChild defaultImage="perfil-avt-1.png" className="img-profile img-profile-child" />
            </div>
          </Link>
        </div>
      </section>
    </body>
  )

}

export default Perfil