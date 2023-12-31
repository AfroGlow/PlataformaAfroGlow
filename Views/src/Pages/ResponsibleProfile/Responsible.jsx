import "./Responsible.css"
import CardsVideos from "../../components/CardsVideos/CardsVideos"
import CardsTop from "../../components/CardsTop/CardsTop"
import HeaderResponsible from "../../components/HeaderResponsible/HeaderResponsible"
import LeftSideResponsible from "../../components/LeftSideResponsible/LeftSideResponsible"
import NewHeaderResponsible from "../../components/NewHeaderResponsible/NewHeaderResponsible"



const Responsible = () => {
    return (
        <>
        <div className="headers-responsible">
        <LeftSideResponsible />
        <HeaderResponsible />
        <div className="cards-top-tutorials">
            <div className="card-first">
                <p>Pequenos cachos,<br /> <span>grandes </span>sonhos!</p>
                <img src="avatar-card-grande.png" />
            </div>

            <div className="cards-top-container">
                <CardsTop props_img={'../video-icone.svg'} props_alt={"Ícone de câmera de vídeo"} props_p={"Tutoriais simples,"} props_p2={"práticos, explicativos"} props_p3={" e de fácil acesso."} />
                <CardsTop props_img={'../pente-icone.svg'} props_alt={"Ícone de pente garfo"} props_p={"Visualize todos os"} props_p2={"materiais que você"} props_p3={" precisa rapidamente."} />
                <CardsTop props_img={'../lista-icone.svg'} props_alt={"Ícone de caderno com anotações."} props_p={"Faça anotações"} props_p2={"dos seus tutoriais"} props_p3={"dinamicamente!"} />
            </div>
        </div>


        <div className="cards-videos">
            <div className="title-tutorials-responsible">
                <img src="../lavagem-icone.svg" alt="ícone de shampoo e condicionador" />
                <p>Lavagem e hidratação<span> (4)</span></p>
            </div>

            <div className="cards-videos-1">
                <CardsVideos props_img={'../video1.jpg'} props_p={'Aprenda tudo sobre os primeiros cuidados na hora de lavar o cabelo da sua estrela!'} props_alt={'Criança negra sorrindo em banheira'} props_video={"/video1"}
                    props_p2={'4:30 minutos'} />
                <CardsVideos props_img={'../video2.jpg'} props_p={'Hora de saber como lavar o cabelo do seu pequeno da melhor forma.'} props_alt={'Criança loira, branca em banheira com espuma no cabelo'} props_video={"/video2"}
                    props_p2={'8:18 minutos'} />
                <CardsVideos props_img={'../video3.png'} props_p={'Venha aprender como hidratar os pequenos cachinhos da forma mais prazerosa.'} props_alt={'Criança negra com cabelo crespo sorrindo enrolado em um roupão'} props_video={"/video3"}
                    props_p2={'2:47 minutos'} />
                <CardsVideos props_img={'../video4.jpg'} props_p={'Vamos nos preparar da maneira mais adequada para oa próximos passos.'} props_alt={'Criança branca, loira lavando o cabelo em banheira'} props_video={"/video4"}
                    props_p2={'10 minutos'} />
            </div>
            <div className="title-tutorials-responsible">
                <img src="../desembaraco-icone.svg" alt="ícone de creme para pentear amarelo" />
                <p>Desembaraçamento e finalização<span> (4)</span></p>
            </div>

            <div className="cards-videos-2">
                <CardsVideos props_img={'../video5.jpg'} props_p={'Vamos aprender a desembaraçar o cabelo de uma maneira divertida.'} props_alt={'foto de um pente desembraçando um cabelo'} props_video={"/video5"}
                    props_p2={'8:08 minutos'} />
                <CardsVideos props_img={'../video6.jpg'} props_p={'Quais são as formas de finalização para os cabelos encaracolados? Vem aprender!'} props_alt={'menina negra com cabelo cacheado castanho'} props_video={"/video6"}
                    props_p2={'6:03 minutos'} />
                <CardsVideos props_img={'../video7.jpg'} props_p={'Aprenda algumas maneiras de finalizar o cabelo do seu pequeno.'} props_alt={'menino branco com cabelo ondulado castanho'} props_video={"/video7"} props_p2={'7:30 minutos'} />
                <CardsVideos props_img={'../video8.jpg'} props_p={'Vamos aos toques finais, e nos preparar para os próximos passos.'} props_alt={'criança ruiva com cabelo cacheado'} props_video={"/video8"}
                    props_p2={'10 minutos'} />
            </div>
            <div className="title-tutorials-responsible">
                <img src="../pente-comum-icone.svg" alt="ícone de pente amarelo" />
                <p>Penteados<span> (4)</span></p>
            </div>

            <div className="cards-videos-3">
                <CardsVideos props_img={'../video9.jpg'} props_p={'Vamos fazer penteados incríveis, e tornar um momento de diversão para toda a família!'} props_alt={'imagem com diversos elementos para cuidados capilares, como pentes, escovas, creme, grampos e prendedores'} props_video={"/video9"}
                    props_p2={'5:41 minutos'} />
                <CardsVideos props_img={'../video10.jpg'} props_p={'Aqui você encontra um penteado simples, que demanda pouco tempo e muitos sorrisos.'} props_alt={'criança negra com cabelo crespo'} props_video={"/video10"}
                    props_p2={'2:45 minutos'} />
                <CardsVideos props_img={'../video11.jpg'} props_p={'Esse penteado tem dificuldade média, separe um tempo na sua agenda e divirta-se!'} props_alt={'criança negra fazendo um penteado'} props_video={"/video11"}
                    props_p2={'3:31 minutos'} />
                <CardsVideos props_img={'../video12.jpg'} props_p={'Se você quer passar um tempo em família com uma tarefa divertida, aqui é o lugar.'} props_alt={'criança branca, ruiva sorrindo'}
                    props_p2={'10 minutos'} />
            </div>

        </div>
    </div>

</>


    )
}

export default Responsible