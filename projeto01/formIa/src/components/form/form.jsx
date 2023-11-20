import './form.css'

function Form ({props_img,props_label}){

 return(
  
    <>
     
     <div>
       <div className='form-select-white'>
           <img src="../public/fundoBg.svg"  alt="" />
           <img src={props_img} className='img-form' alt="" />
       </div>
       <input type="radio" className='input-radio-form' name="input-form" id="" />
       <label htmlFor="input-form">{props_label}</label>
   
    </div>
    
    </>

 )


} export default Form