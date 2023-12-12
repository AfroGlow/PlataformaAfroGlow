import Input from "../../Components/Input/input"
import UniversalButton from "../../Components/Button/Button"
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';
import ButtonArrow from "../../Components/ButtonArrow/BtnArrow"
import './EditProfileParents.css'
import ImageHandlerParents from "./ImageHandler/ImageHandlerProfile";

function EditProfileParents() {


    const handleImageChangeParents = (newImage) => {
        console.log('Nova imagem:', newImage);
    };

    return (
        <body className='bg-edit-parents'>
            <section className='container-edit-parents'>
                <Link to="/perfil" className='link-router'>
                    <ButtonArrow props_arrow={'Voltar'} />
                </Link>
                <h2 className='title-edit-parents'>Editar Perfil</h2>
                <div className='edit-profile-parents'>
                    <div className='img-edit-parents'>
                        <ImageHandlerParents defaultImage="/perfil-avt-adult-1.png" onImageChangeP={handleImageChangeParents} />
                        <Link to="/perfil" className='link-router'><UniversalButton propsBtn={'SALVAR ALTERAÇÕES'} /></Link>
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
                        <Input label={'Email'} labelFor={'name'} type={'text'} id={'userName'} />
                        <Input label={'CPF'} labelFor={'cpf'} type={'tel'} id={'tel'} />
                        <Input label={'Telefone'} labelFor={'tel'} type={'tel'} id={'tel'} />
                    </div>
                </div>
            </section>
        </body>
    )
}

export default EditProfileParents