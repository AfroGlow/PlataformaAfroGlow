import './Button.css'

const UniversalButton =  ({propsBtn}) => {
    return (
        <div className='button'>
        <button>{propsBtn}</button>
        </div>
    )
}   

export default UniversalButton