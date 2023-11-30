import { Link } from 'react-router-dom'
import EditButton from '../../Components/ButtonEdit/btnEdit'
import LeaveButton from '../../Components/ButtonLeave/btnLeave'
import './Profile.css'


function Perfil() {
  return (
    <body className='bg-profile'>
      <section className='container-profiles'>
        <Link to="/" className='router'>
          <LeaveButton props_leave={'Sair'} />
        </Link>
        <div className='info-edit'>
          <h2 className='title-page'>Quem está acessando?</h2>
          <Link to="/editar" className='link-router'><EditButton /></Link>
        </div>
        <div className="profiles card-1">
          <Link to='/perfilresponsavel'>
            <div className="parents-profile">
              <h2 className='name-profile'>Página Responsável</h2>
              <img src="../public/img-responsavel-g.png" alt="Avatar mulher parda, com cabelo crespo preto, blusa amarela e brincos" className='img-parents' />
            </div>
          </Link>
          <Link to='/perfilcrianca'>
            <div className="children-profile card-1">
              <h2 className='name-profile'>Página Criança</h2>
              <img id='img-child' src="../public/img-criança-g.png" alt="Avatar menino negro, com cabelo cacheado e com blusa amarela" />
            </div>
          </Link>
        </div>
      </section>
    </body>
  )

}

export default Perfil