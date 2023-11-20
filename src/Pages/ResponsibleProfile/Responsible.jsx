import "./Responsible.css"
import CardsVideos from "./Tutorials/components/CardsVideos/CardsVideos"
import CardsTop from "./Tutorials/components/CardsTop/CardsTop"
import HeaderResponsible from "./Tutorials/components/HeaderResponsible/HeaderResponsible"
import LeftSideResponsible from "./Tutorials/components/LeftSideResponsible/LeftSideResponsible"


const Responsible = () => {
    return (

        <div className='tutorials'>


            <div className="container-side-cards">
                <LeftSideResponsible />
                <HeaderResponsible />

                <div className="container-tutorials">

                    <div className="cards-top-tutorials">
                        <div className="card-first">
                            <p>Pequenos cachos,<br /> <span>grandes </span>sonhos!</p>

                            <img
                                className="card-first-img"
                                src="avatar-card-grande.png"
                            />
                        </div>
                        <CardsTop props_img={'../video-icone.svg'} props_alt={"Ícone de câmera de vídeo"} props_p={"Tutoriais simples,"} props_p2={"práticos, explicativos"} props_p3={" e de fácil acesso."} />
                        <CardsTop props_img={'../pente-icone.svg'} props_alt={"Ícone de pente garfo"} props_p={"Visualize todos os"} props_p2={"materiais que você"} props_p3={" precisa rapidamente."} />
                        <CardsTop props_img={'../lista-icone.svg'} props_alt={"Ícone de caderno com anotações."} props_p={"Faça anotações"} props_p2={"dos seus tutoriais"} props_p3={"dinamicamente!"} />

                    </div>

                    <div className="cards-videos">
                        <div className="title-tutorials">
                            <img src="../lavagem-icone.svg" alt="" />
                            <p>Lavagem e hidratação<span> (4)</span></p>
                        </div>

                        <div className="cards-videos-1">
                            <CardsVideos props_img={'../public/video1.svg'} props_p={'Aprenda tudo sobre os primeiros cuidados na hora de lavar o cabelo da sua estrela!'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video2.svg'} props_p={'Hora de saber como lavar o cabelo do seu pequeno da melhor forma.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video3.svg'} props_p={'Venha aprender como hidratar os pequenos cachinhos da forma mais prazerosa.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video4.svg'} props_p={'Vamos nos preparar da maneira mais adequada para oa próximos passos.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                        </div>
                        <div className="title-tutorials">
                            <img src="../desembaraco-icone.svg" alt="" />
                            <p>Desembaraçamento e finalização<span> (4)</span></p>
                        </div>

                        <div className="cards-videos-2">
                            <CardsVideos props_img={'../public/video5.svg'} props_p={'Vamos aprender a desembaraçar o cabelo de uma maneira divertida.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video6.svg'} props_p={'Quais são as formas de finalização para os cabelos encaracolados? Vem aprender!'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video7.svg'} props_p={'Aprenda algumas maneiras de finalizar o cabelo do seu pequeno.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video8.svg'} props_p={'Vamos aos toques finais, e nos preparar para os próximos passos.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                        </div>
                        <div className="title-tutorials">
                            <img src="../pente-comum-icone.svg" alt="" />
                            <p>Penteados<span> (4)</span></p>
                        </div>

                        <div className="cards-videos-3">
                            <CardsVideos props_img={'../public/video9.svg'} props_p={'Vamos fazer penteados incríveis, e tornar um momento de diversão para toda a família!'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video10.svg'} props_p={'Aqui você encontra um penteado simples, que demanda pouco tempo e muitos sorrisos.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video11.svg'} props_p={'Esse penteado tem dificuldade média, separe um tempo na sua agenda e divirta-se!'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                            <CardsVideos props_img={'../public/video12.svg'} props_p={'Se você quer passar um tempo em família com uma tarefa divertida, aqui é o lugar.'} props_alt={'criança'}
                                props_p2={'10 minutos'} />
                        </div>

                    </div>

                </div>




            </div>


        </div>

    )
}

export default Responsible