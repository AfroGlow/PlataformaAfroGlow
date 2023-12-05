import './input-form.css'

function InputForm({props_value}){
   return(
    <>
    
     <input type="submit" className='input-form' value={props_value} required/>

     </>
     )
} export default InputForm


