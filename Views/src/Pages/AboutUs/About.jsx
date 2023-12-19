import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./About.css";
import CardsTeam from "./components/CardsTeam/CardsTeam";

const About = () => {
  return (
    <body>
      <Header />
      <section className="container-about">
        <article className="container-mvv">
          <h2 className="titles-about">Missão Visão e Valores</h2>
          <div className="MVV">
            <article className="box-mvv">
              <img src="icon-mission-star.svg" alt="Estrela" />
                <div className="missionVisionValues">
                  <h3>Missão</h3>
                  <p>
                    Promover um ambiente acolhedor, que desenvolve a autoestima
                    e autonomia de crianças. Cultivando a beleza natural de seus
                    cachinhos.
                  </p>
                </div>
            </article>
            <article className="box-mvv">
              <img src="icon-target-visao.svg" alt="Icone alvo" />
                <div className="missionVisionValues">
                  <h3>Visão</h3>
                  <p>
                    Construir uma sociedade em que todos se sintam acolhidos e
                    empoderados, abraçando com orgulho a beleza natural de seus
                    cabelos.
                  </p>
              </div>
            </article>
            <article className="box-mvv">
              <img src="icon-diamond-values.svg" alt="Icone Diamante" />
                <div className="missionVisionValues">
                  <h3>Valores</h3>
                  <div className="text-spacing">
                    <p>
                      <span>Empoderamento: </span>
                      Fortalecer a autoestima das crianças, incentivando o amor
                      por suas raízes.
                    </p>
                    <p>
                      <span>Diversidade e Inclusão: </span>
                      Celebrar a diversidade capilar, promovendo igualdade em um
                      ambiente inclusivo.
                    </p>
                    <p>
                      <span>Educação e Conhecimento: </span>
                      Priorizar a educação para o cuidado saudável dos cabelos,
                      oferecendo orientações e materiais de apoio.
                    </p>
                </div>
              </div>
            </article>
          </div>
        </article>
        <section className="container-team">
        <h2 className="titles-about">Desenvolvedores</h2>
        <div className="container-sides-developers">
          <div className="developers-left">
            <div className="adjustment-lilian">
              <CardsTeam ImgTeam={'team-lilian.png'} NameTeam={'Lilian Carvalho'} LinkedinTeam={'https://www.linkedin.com/in/lilian-carvalho-7581a8265/'} GithubTeam={'https://github.com/Lilian-Carvalho25'} CategoryTeam={'Product Owner, UI/UX & Front-end'}/>
            </div>
            <div className="adjustment-clara">
              <CardsTeam ImgTeam={'team-clarinha.png'} NameTeam={'Clara Aguiar'} LinkedinTeam={'https://www.linkedin.com/in/clara-aguiar-medeiros/'} GithubTeam={'https://github.com/claraAgMd'} CategoryTeam={'Scrum Master & Front-end'}/>
            </div>
            <CardsTeam  ImgTeam={'team-marcos.png'} NameTeam={'Marcos Vinicius'} LinkedinTeam={'https://www.linkedin.com/in/marcos-vinicius-moura-383bb216a/'} GithubTeam={'https://github.com/ViniciusV4'} CategoryTeam={'Full-Stack'}/>
            <div className="adjustment-fabricio">
              <CardsTeam  ImgTeam={'team-fabricio.png'} NameTeam={'Fabrício Lemos'} LinkedinTeam={'https://www.linkedin.com/in/fabricio-lemos-732580206/'} GithubTeam={'https://github.com/Fabricio1308'} CategoryTeam={'Front-end'} />
            </div>
          </div>
          <div className="developers-right">
            <div className="adjustment-vitoria">
              <CardsTeam ImgTeam={'team-vitoria.png'} NameTeam={'Vitoria Florencio'} LinkedinTeam={'https://www.linkedin.com/in/vitória-florêncio-083526262/'} GithubTeam={'https://github.com/Vtoriaa'} CategoryTeam={'Financeira UI/UX & Front-end'}/>
            </div>
            <CardsTeam ImgTeam={'team-jhenifer.png'} NameTeam={'Jhenifer Ribeiro'} LinkedinTeam={'https://www.linkedin.com/in/jhenifer-ribeiro-lopes-5763951a7/'} GithubTeam={'https://github.com/JheniferRibeiro'} CategoryTeam={'Back-end'}/>
            <div className="adjustment-marcelo">
              <CardsTeam  ImgTeam={'team-marcelo.png'} NameTeam={'Marcelo Aggio'} LinkedinTeam={'https://www.linkedin.com/in/marceloaggiodev/'} GithubTeam={'https://github.com/MarceloAggio'} CategoryTeam={'Back-end'}/>
            </div>
            <CardsTeam  ImgTeam={'team-thomas.png'} NameTeam={'Anthony Thomas'} LinkedinTeam={'https://www.linkedin.com/in/anthonythomasmm/'} GithubTeam={'https://github.com/anthonythom'} CategoryTeam={'Cloud Full-Stack'} />
          </div>
        </div>
        </section>
      </section>
      <Footer />
    </body>
  );
};

export default About;
