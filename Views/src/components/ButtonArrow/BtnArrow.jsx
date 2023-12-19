import './BtnArrow.css'

function ArrowButton({props_arrow}){

    return(
        <div className='btn-arrow'>
            <img src="../BotãoEsquerda.svg" alt="Botão Voltar" />
            <p>{props_arrow}</p>
        </div>
    )
}

export default ArrowButton