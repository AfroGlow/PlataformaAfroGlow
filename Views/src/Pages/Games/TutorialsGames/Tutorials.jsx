import { Link } from 'react-router-dom';
import './Tutorials.css';


const Tutorials = ({Images, Images2, Instructions, Instructions2, Button, BackgroundButton}) => {
    return(
        <section className='container-tutorials'>
            <div className='container-tutorials-secondary'>
                <Link to="/perfilcrianca"><img className='back-games' src="icon-button-left.svg" alt=""  style={{ textDecoration: 'none' }}/></Link>
                <div className='container-cards-tutorials'>
                    <article className='card-tutorials'>
                        <img src={Images} alt="" />
                        <p>{Instructions}</p>
                    </article>
                    <article className='card-tutorials'>
                        <img src={Images2} alt="" />
                        <p>{Instructions2}</p>
                    </article>
                </div>
            <button style={{backgroundColor: BackgroundButton}}>{Button}</button>
            </div>
        </section>
    )
}

export default Tutorials