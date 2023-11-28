import './form.css'

function Form ({props_img,props_label}){

 return(
  
    <>
     
     <div>
       <div className='form-select-white'>
           <img src="./fundoBg.svg"  alt="" />
           <img src={props_img} className='img-form' alt="" />
       </div>
       <div className='custom-radio'>
       <input type="radio" className='input-radio-form' name="input-form" id="" />
        <label className='label-input-radio' htmlFor="input-form">{props_label}</label>
       </div>
      
   
    </div>
    
    </>

 )


} export default Form