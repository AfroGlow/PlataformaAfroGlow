import './btnLeave.css'

function LeaveButton({props_leave, props_img}){

    return(
        <div className='btn-leave'>
            <img src="../icondoor.svg" alt="Botão Voltar" className='img-leave' />
            <p className='p-leave'>{props_leave}</p>
        </div>
    )
}

export default LeaveButton