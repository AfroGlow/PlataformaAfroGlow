import './input.css'
function InputSelect({ labelFor, label, id}) {
    return (
        <form method='post'>
            <div className='inputGroup'>
            <label className='form-label' htmlFor={labelFor}>Sexo</label>
                    <select name='genero' id='genero' className='input-select'>
                    <option selected>Genero</option>
                    <option value="1" id='female'>Feminino</option>
                    <option value="2" id='male'>Masculino</option>
                    </select>
            </div>
        </form>
    )
}

export default InputSelect