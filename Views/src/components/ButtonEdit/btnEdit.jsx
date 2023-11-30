import './btnEdit.css'

function EditButton(){
    return(
        <button className='edit-btn'>
            <p className='p-edit'>editar perfil</p>
            <img src="../public/iconEdit.svg" alt="" className='img-edit'/>
        </button>
    )
}

export default EditButton