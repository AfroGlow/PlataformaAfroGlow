import './EditProfileChild.css'
import Input from "../../components/Input/input"
import UniversalButton from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import ButtonArrow from "../../components/ButtonArrow/BtnArrow"
import ImageHandlerChild from './ImageHandlerChild/ImageHandlerChild';
import DarkModeSwitch from '../../components/DarkSwitch/DarkModeSwitch';

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