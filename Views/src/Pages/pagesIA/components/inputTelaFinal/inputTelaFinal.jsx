import './inputTelaFinal.css'


function InputTelaFinal({props_placeholder}){

    return(
    <>
    <input type="text" className='inputTelaFinal' placeholder={props_placeholder} required/>
    </>
    )
} export default InputTelaFinal