import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CarouselComent from '../../components/CarouselComent/CarouselComent'
import Partners from '../../components/PartnersCarousel/Partners'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <Header />
      <div className="welcomeHome">
        <div className='welcomeContainerOne'>
            <p className='homeWelcomeParagraph'>Seja Bem-Vindo a Plataforma</p>
            <h1 className='homeWelcomeText'>Aprender a amar e <br /> cuidar dos seus <span>cabelos</span><br /> nunca foi tão divertido!</h1>
            <Link to="/cadastro">
              <button className='homeWelcomeButton'>
                  <a href="#">Brilhe Conosco</a>
              </button>
            </Link>
          </div>
          <div>
            <img src="ImagensCriancas.svg" alt="fundo roxo" className='homeWelcomeImg'/>
          </div>
      </div>
      <main className='mainHome'>
        <div className="cardsHomeTasks">
          <div className="tasksCard">
            <a href=""><img src="CaixaSobreUm.png" alt="" /></a>
          </div>
          <div className="tasksCard">
            <a href=""><img src="CaixaSobreTres.png" alt="" /></a>
          </div>
          <div className="tasksCard">
            <a href=""><img src="CaixaSobreDois.png" alt="" /></a>
          </div>
        </div>

        <article className="carousel-limit carousel">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <a href=""><img src="CarroselJogo.svg" class="d-block w-100" alt="..." /></a>
              </div>
              <div class="carousel-item">
                <a href=""><img src="CarroselJogoDois.png" class="d-block w-100" alt="..." /></a>
              </div>
              <div class="carousel-item">
                <a href=""><img src="CarroselJogoTres.png" class="d-block w-100" alt="..." /></a>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
      </article>

      <div className="watchYoutube">
        <img src="AvatarMasculino.svg" alt="avatar masculino, roupa amarela" />
        <iframe className='watchYoutubeCard' width="560" height="315" src="https://www.youtube.com/embed/RWWJ4qEfRnY?si=H-DeEL5v6jeLIP4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <img src="AvatarFeminino.svg" alt="avatar feminino, roupa amarela" />
      </div>

      <div className='AIscpace'>
        <div className="AIscpaceText">
          <h3>Revolucione o seu cuidado <br />capilar com a nossa IA! </h3>
          <ul>
            <li>Utilize a IA para identificar seu tipo de cabelo</li>
            <li>Nos conte mais sobre o seu cabelo e as necessidades</li>
            <li>Receba uma box personalizada para seu tratamento</li>
          </ul>
          <Link to="/cadastro"><button className='buttonIA'><a href="#">Acesse Nossa IA</a></button></Link>
        </div>
        <img src="ImagemIA.png" alt="imagem card"/>
      </div>

      <div className="plans" id='plans'>
        <h2>Conheça nossos planos</h2>
        <div className="plansCards">
          <div className="plansCardContent">

            <div className="plansValue">
              <p>Plano Basic</p>
              <p className='plansValueMoney'>Gratuito</p>
            </div>

            <div className='plansContent'>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso a tutoriais</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso limitado os jogos</p>
              </div>
              <div className='plansContentOption'>
                <img src="block.svg" alt="botão de ok" />
                <p>Inteligência Artificial</p>
              </div>
              <div className='plansContentOption'>
                <img src="block.svg" alt="botão de ok" />
                <p>Podcasts</p>
              </div>
              <div className='plansContentOption'>
                <img src="block.svg" alt="botão de ok" />
                <p>Notas</p>
              </div>
            </div>

            <Link to="/cadastro"><button><a href="">Assinar</a></button></Link>
          </div>

          <div className="plansCardContent">

            <div className="plansValue">
              <p>Plano Premium</p>
              <p className='plansValueMoney'>R$ 19,99<span>/Mês</span></p>
            </div>

            <div className='plansContent'>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso a tutoriais</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso aos jogos</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Inteligência Artificial</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Podcasts</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Notas</p>
              </div>
            </div>

            <Link to="/cadastro"><button><a href="">Assinar</a></button></Link>
          </div>

          <div className="plansCardContent">

            <div className="plansValue">
              <p>Plano Plus</p>
              <p className='plansValueMoney'>R$ 199,99<span>/Ano</span></p>
            </div>

            <div className='plansContent'>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso a tutoriais</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Acesso aos jogos</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Inteligência Artificial</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Podcasts</p>
              </div>
              <div className='plansContentOption'>
                <img src="check.svg" alt="botão de ok" />
                <p>Notas</p>
              </div>
            </div>

            <Link to="/cadastro"><button><a href="">Assinar</a></button></Link>
          </div>
        </div>
      </div>

      <div className="socialMedia">
        <img src="avatarSocialMedia.svg" alt="personagem loira com camisa amarela"  className='avatarSocialMedia'/>
        <div className="socialMediaContent">
          <h3>Fique por dentro das novidades da <br /><span>AfroGlow</span> nas redes sociais</h3>
          <div className="socialMediaIcons">
              <a href=""><img src="iconLinkedin.svg" alt="icone linkedin amarelo" /></a>
              <a href=""><img src="iconTiktok.svg" alt="icone tiktok amarelo" /></a>
              <a href=""><img src="iconInstagram.svg" alt="icone instagram amarelo" /></a>
              <a href=""><img src="iconYoutube.svg" alt="icone youtube amarelo" /></a>
          </div>
        </div>
      </div>

      <div className="feedback" id='feedback'>
        <h2>Depoimentos</h2>
        <CarouselComent />
        <img src="barRoxa.svg" alt="" className='barFooter'/>
      </div>
      </main>
<Partners/>
      
      <Footer />
    </> 
  )
}

export default Home
