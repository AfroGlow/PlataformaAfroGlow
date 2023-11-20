import './btnEdit.css'

function EditButton(){
    return(
        <button className='edit-btn'>
            <p className='p-edit'>editar perfil <img src="../public/iconEdit.svg" alt="" className='img-edit'/></p>
        </button>
    )
}

export default EditButton