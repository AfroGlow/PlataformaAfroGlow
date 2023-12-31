import Input from "../../components/Input/input"
import UniversalButton from "../../components/Button/Button"
import { Link } from "react-router-dom"
import ButtonArrow from "../../components/ButtonArrow/BtnArrow"
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
                    </div>
                    <div className="forms-edit">
                        <h2 className='subtitle-edit'>Dados da conta</h2>
                        <Input label={'Nome'} labelFor={'name'} type={'text'} id={'userName'} />
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