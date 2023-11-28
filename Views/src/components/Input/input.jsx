    import './input.css'

    //componente input informações do atributo com props
    function Input({labelFor, label, type, PlaceH, id}){
        return(        
                <form className='form-boz' method='post'>  
                    <div className='inputGroup'>
                    <label className='form-label' htmlFor={labelFor}>{label}</label>
                        <input
                        type={type}
                        placeholder={PlaceH}
                        id={id}
                         className='input'
                        />
                     </div>
                </form>          
        )
    }

    export default Input