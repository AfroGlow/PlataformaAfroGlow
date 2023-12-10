import './EditProfileChild.css'
import Input from "../../Components/Input/input"
import UniversalButton from "../../Components/Button/Button"
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import ButtonArrow from "../../Components/ButtonArrow/BtnArrow"
import DarkModeSwitch from '../../components/DarkSwitch/DarkModeSwitch';



function EditProfileChild() {
    return (
        <body className='bg-edit-child'>
            <section className='container-edit-child'>
                <Link to="/perfil" className='link-router'>
                    <ButtonArrow props_arrow={'Voltar'} />
                </Link>
                <h2 className='title-edit-child'>Editar Perfil</h2>
                <div className='edit-profile-child'>
                    <div className='img-edit-child'>
                        <img className='img-profile' src="../public/img-criança-g.png" alt="Avatar menino negro, com cabelo cacheado e com blusa amarela" id='img-child' />
                        <Link to="/perfil" className='link-router'><UniversalButton propsBtn={'SALVAR ALTERAÇÕES'} /></Link>
                        <Link to="/image-child-select"><img src="Icon-pen.svg" alt="Botão de editar avatar" className='img-pen'/></Link>
                    </div>
                    <div className="forms-edit">
                        <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} />
                        <div className='modes'>
                            <h2 className='subtitle-edit'>Temas</h2>
                            <div className='btn-mode'>
                                <button className='btn-clear'> <Icon icon="twemoji:sun" width="24" height="24" />Modo Claro</button>
                                <DarkModeSwitch />
                                <button className='btn-dark'> <Icon icon="akar-icons:moon-fill" color="#ccc" width="24" height="24" /> Modo Escuro</button>
                            </div>
                        </div>
                        <h2 className='subtitle-edit'>Dados da conta</h2>
                        <Input label={'Data de Nascimento'} labelFor={'date'} type={'text'} id={'date'} />
                        <Input label={'Genero'} labelFor={'genero'} type={'text'} id={'genero'} />
                    </div>
                </div>
            </section>
        </body>
    )
}

export default EditProfileChild