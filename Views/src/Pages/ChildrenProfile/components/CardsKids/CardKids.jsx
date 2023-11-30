import { Link } from 'react-router-dom'
import './CardKids.css'


const CardKids = () => {
    return (
            <div className='cardsKid'>
            <article className='cardKid'>
                <img src="game-cover-1.png" alt="" />
                <Link to="/jogo1"><button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button></Link>
            </article>
            <article className='cardKid'>
                <img src="game-cover-2.png" alt="" />
                <Link to="/jogo2"><button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button></Link>
            </article>
            <article className='cardKid'>
                <img src="game-cover-3.png" alt="" />
                <Link to="/jogo3"><button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button></Link>
            </article>
            <article className='cardKid'>
                <img src="game-cover-4.png" alt="" />
                <Link to="/jogo5"><button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button></Link>
            </article>
            <article className='cardKid'>
                <img src="game-cover-5.png" alt="" />
                <Link to="/jogo4"><button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button></Link>
            </article>
            <article className='cardKid'>
                <img src="game-cover-6.png" alt="" />
                <button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button>
            </article>
            <article className='cardKid'>
                <img src="game-cover-7.png" alt="" />
                <button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button>
            </article>
            <article className='cardKid'>
                <img src="game-cover-8.png" alt="" />
                <button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button>
            </article>
            <article className='cardKid'>
                <img src="game-cover-9.png" alt="" />
                <button>JOGAR<img className='icon-arrow' src="./icon-arrow-button.svg" alt="" /></button>
            </article>
                  </div>
    )
}

export default CardKids