import './TutorialFive.css';

const TutorialFive = () => {
    return(
        <section className='container-tutorials'>
        <div className='container-tutorial-five'>
            <div className='container-tutorials-secondary'>
                <img className='back-games' src="icon-button-left.svg" alt="" />
                <div className='container-cards-tutorials'>
                    <article className='card-tutorials'>
                        <img src="icon-puzzle-tutorials.svg" alt="" />
                        <p>Monte todos os pedacinhos, até chegar na imagem final</p>
                    </article>
                </div>
            <button>INICIAR</button>
            </div>
        </div>
    </section>
    )
}

export default TutorialFive