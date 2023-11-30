import './Button.css'

const UniversalButton =  ({propsBtn}) => {
    return (
        <div className='button-universal'>
        <button>{propsBtn}</button>
        </div>
    )
}   

export default UniversalButton