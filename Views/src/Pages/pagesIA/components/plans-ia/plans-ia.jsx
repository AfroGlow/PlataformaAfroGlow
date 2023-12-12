import './plans-ia.css'


function PlansIa({props_label, props_title_box}){
    return(
        <>
        <div className='box-plans-ia'>
            <h4 className='title-plans-ia'>{props_title_box}</h4>
        <div className='box-input-plans-ia'>
        <div className='custom-radio-ia'>
       <input type="radio" className='input-radio-ia-form' name="input-form" id="" />
        <label className='label-input-radio-ia' htmlFor="input-form">Mensal <p className='p-yellow-plans-ia'>65,90/mês</p></label>
       </div>
       </div>
       <div className='box-input-plans-ia'>
       <div className='custom-radio-ia'>
       <input type="radio" className='input-radio-ia-form' name="input-form" id="" />
        <label className='label-input-radio-ia' htmlFor="input-form">Trimestral <p className='p-yellow-plans-ia'>58,90/mês</p></label>
       </div>
       </div>
       <div className='box-input-plans-ia'>
       <div className='custom-radio-ia'>
       <input type="radio" className='input-radio-ia-form' name="input-form" id="" />
        <label className='label-input-radio-ia' htmlFor="input-form">Semestral <p className='p-yellow-plans-ia'>49,90/mês</p></label>
       </div>
       </div>
       <input type="submit" className='input-plans-purple-ia' value={"Assinar o plano"} />
       </div>
        </>
    )
}export default PlansIa