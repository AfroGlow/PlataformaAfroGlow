import './ButtonDrawGames.css'

const ButtonSteps =  ({props_button_draw}) => {
    return (
        <div className='button-draw-game'>
        <button>{props_button_draw}</button>
        </div>
    )
}   

export default ButtonSteps