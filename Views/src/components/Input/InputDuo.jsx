import './input.css'
import React, { useState } from 'react';

//componente input informações do atributo com props
function InputDuo({labelFor, label, type, PlaceH, id, labelFor2, label2, type2, PlaceH2, id2, valueCamp,}){

    const [cpf, setCpf] = useState('');

    const handleCpf = (event) => {
        let inputCpf = event.target.value.replace(/\D/g, '');
    
        if (inputCpf.length > 11) {
          inputCpf = inputCpf.slice(0, 11);
        }
    
        inputCpf = inputCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
        setCpf(inputCpf);
    }

    return(        
            <div className='inputM'>
                <form className='form-boz w50' method='post'> 
                    <div className='inputGroup'>
                    <label className='form-label' htmlFor={labelFor}>{label}</label>
                        <input
                        maxLength={14}
                        type={type}
                        placeholder={PlaceH}
                        id={id}
                        value={cpf}
                        onChange={handleCpf}
                        className='input'
                        />
                     </div>
                </form>
                <form className='form-boz w50'>
                    <div className='inputGroup'>
                    <label className='form-label' htmlFor={labelFor2}>{label2}</label>
                        <input
                        type={type2}
                        placeholder={PlaceH2}
                        id={id2}
                         className='input'
                        />
                     </div>
                </form>
            </div>
    )
}

export default InputDuo