import './CardsTeam.css';

const CardsTeam = ({ImgTeam,  NameTeam, LinkedinTeam, GithubTeam, CategoryTeam}) => {
    return(
        <article className="cards-team">
            <img src={ImgTeam} alt={NameTeam} />
            <div className='member-data'>
                <h3>{NameTeam}</h3>
                <div className='icons-contact-team'>
                    <a href={LinkedinTeam} target='_blank'><img src="icon-linkedin-team.svg" alt="ícone azul do linkedin" /></a>
                    <a href={GithubTeam} target='_blank'><img src="icon-github-team.svg" alt="ícone preto do github" /></a>
                </div>
                <h4>{CategoryTeam}</h4>
            </div>
        </article>
    )
}

export default CardsTeam