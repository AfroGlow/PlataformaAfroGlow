import './EditProfileChild.css'
import Input from "../../Components/Input/input"
import UniversalButton from "../../Components/Button/Button"
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import ButtonArrow from "../../Components/ButtonArrow/BtnArrow"
import ImageHandlerChild from './ImageHandlerChild/ImageHandlerChild';

const EditProfileChild = () => {

    const handleImageChange = (newImage) => {
        console.log('Nova imagem:', newImage);
    };

    return (
        <body className='bg-edit-child'>
            <section className='container-edit-child'>
                <Link to="/perfil" className='link-router'>
                    <ButtonArrow props_arrow={'Voltar'} />
                </Link>
                <h2 className='title-edit-child'>Editar Perfil</h2>
                <div className='edit-profile-child'>
                    <div className='img-edit-child'>

                        < ImageHandlerChild defaultImage="perfil-avt-1.png" onImageChange={handleImageChange} />
                        <Link to="/perfil">
                            <UniversalButton propsBtn={'SALVAR ALTERAÇÕES'} onClick={() => alert('Alterações salvas!')} />
                        </Link>
                        <img src="Icon-pen.svg" alt="Botão de editar avatar" className='img-pen' />
                    </div>
                    <div className="forms-edit">
                        <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} />
                        <div className='modes'>
                            <h2 className='subtitle-edit'>Temas</h2>
                            <div className='btn-mode'>
                                <button className='btn-clear'> <Icon icon="twemoji:sun" width="24" height="24" />Modo Claro</button>
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