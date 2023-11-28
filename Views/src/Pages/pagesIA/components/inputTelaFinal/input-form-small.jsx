import './input-form-small.css'


function InputFormSmall({props_placeholder}){

    return(
        <>
        <input type="text" className='inputTelaFinaSmall' placeholder={props_placeholder}/>
        </>
    )
} export default InputFormSmall