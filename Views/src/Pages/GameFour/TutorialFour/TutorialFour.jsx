import './TutorialFour.css';

const TutorialFour = () => {
    return(
        <section className='container-tutorials'>
        <div className='container-tutorial-four'>
            <div className='container-tutorials-secondary'>
                <img className='back-games' src="icon-button-left.svg" alt="" />
                <div className='container-cards-tutorials'>
                    <article className='card-tutorials'>
                        <img src="icon-cut-tutorials.svg" alt="" />
                        <p>Corte todos os alimentos que fazem mal para o seu cabelo</p>
                    </article>
                </div>
            <button>INICIAR</button>
            </div>
        </div>
    </section>
    )
}

export default TutorialFour