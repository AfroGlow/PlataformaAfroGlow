import "./FamilyMedia.css"
import HeaderResponsible from "../../components/HeaderResponsible/HeaderResponsible";
import LeftSideResponsible from "../../components/LeftSideResponsible/LeftSideResponsible";
import CardsMedia from "../../components/CardsMedia/CardsMedia";
import Footer from "../../components/Footer/Footer";

function FamilyMedia() {

    return (
        <>
            <div className="family-media">
                <div className="family-media-components">
                    <LeftSideResponsible />
                        <HeaderResponsible />
                    <div className="container-family-media">
                        <div className="text-medias">
                            <h1>Mídias - Momentos em família</h1>
                            <p>Aqui você encontra uma junção de músicas, livros e conteúdos inspiradores que colhemos com muito carinho e atenção. Aproveite cada minuto com a sua família, leve carinho, e afeto.</p>
                            <div className="iframe-playlist"><iframe src="https://open.spotify.com/embed/playlist/182vRN63aljy3c98Dv0r8t?utm_source=generator" ></iframe></div>
                            <h1>Livros brilhantes AfroGlow</h1>
                        </div>
                        <div className="card-media-container">
                            <div className="first-row-media">
                                <CardsMedia props_img_media={"../midia1.png"} props_h1_media={"O mundo no black power de Tayó"} props_p_media={"Tayó é uma menina negra que tem orgulho do cabelo crespo com penteado black power, enfeitando-o das mais diversas formas"} props_alt_media={"Capa do livro O mundo no black power de Tayó"} props_link_media={"https://www.amazon.com.br/Mundo-Black-Power-Tayó/dp/8575963090"} />

                                <CardsMedia props_img_media={"../midia2.png"} props_h1_media={"Amor de cabelo"} props_p_media={"O cabelo de Zuri é mágico. Ele pode ser trançado e enrolado para combinar perfeitamente com uma tiara de princesa ou uma capa de super-heroína."} props_alt_media={"Capa do livro Amor de cabelo"} props_link_media={"https://www.amazon.com.br/Amor-cabelo-Matthew-Cherry/dp/8501119768/ref=sr_1_1?adgrpid=130475891647&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMqEfACc_ga_B3349seHBdxcTKK9B0WVTFyHb-RtzZIgTw3PZb4kLfMaAtoUEALw_wcB&hvadid=595936185497&hvdev=c&hvlocphy=9074235&hvnetw=g&hvqmt=e&hvrand=17678743998489375597&hvtargid=kwd-905408811972&hydadcr=14308_13411766&keywords=amor+de+cabelo&qid=1700520630&sr=8-1"} />

                                <CardsMedia props_img_media={"../midia3.png"} props_h1_media={"Bucala: A princesa do Quilombo"} props_p_media={"A  pequena princesa do Quilombo do Cabula conta a história de uma linda princesa quilombola que tem o cabelo crespo em formato de coroa de rainha"} props_alt_media={"Capa do livro Bucala: A princesa do Quilombo"} props_link_media={"https://www.amazon.com.br/Bucala-Princesa-Quilombo-Cabula-Nunes/dp/8592736536"} />
                            </div>

                            <div className="second-row-media">
                                <CardsMedia props_img_media={"../midia4.png"} props_h1_media={"Chapeuzinho Vermelho e o Boto"} props_p_media={"Ao levar uma cesta com tacacá e frutas  para a avó doente, Chapeuzinho conversa com um boto, fica distraída com as belezas da floresta e tem uma grande surpresa quando chega no seu destino."} props_alt_media={"Capa do livro Chapeuzinho Vermelho e o Boto"} props_link_media={"https://www.amazon.com.br/Chapeuzinho-Vermelho-Boto-Cor-Cristina-Agostinho/dp/8571607281"} />

                                <CardsMedia props_img_media={"../midia5.png"} props_h1_media={" O menino com flores no cabelo"} props_p_media={"Uma história comovente de amizade e aceitação, que aborda doença e sofrimento de uma forma que as crianças possam entender e se sintam inspiradas"} props_alt_media={"Capa do livro O menino com flores no cabelo"} props_link_media={"https://www.companhiadasletras.com.br/livro/9788567100463/o-menino-com-flores-no-cabelo"} />

                                <CardsMedia props_img_media={"../midia6.png"} props_h1_media={"Pente Quente"} props_p_media={"O primeiro alisamento capilar de uma garota, o bulling,  mas também a despertar da consciência, o desenvolvimento da autoestima, a alegria da vida nas comunidades"} props_alt_media={"Capa do livro Pente Quente"} props_link_media={"https://www.amazon.com.br/PENTE-QUENTE-Ebony-Flowers/dp/8595711402/ref=sr_1_6?adgrpid=108602061802&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMoboanmNFywT0odyZY7AGfdrpuaNq6hxQS8u5av13WsnhOHqZfEJVcaAqnzEALw_wcB&hvadid=595935984212&hvdev=c&hvlocphy=9074235&hvnetw=g&hvqmt=e&hvrand=12995353671650839343&hvtargid=kwd-365389433254&hydadcr=9026_13561469&keywords=pente+quente&qid=1700522074&sr=8-6"} />
                            </div>
                            <div className="title-poadcast">
                                <h1>Podcasts</h1>
                            </div>
                            <div className="poadcasts">


                                <CardsMedia props_img_media={"../midia7.png"} props_h1_media={"Calunguinha"} props_p_media={"Calunguinha adora ouvir histórias. Na sua imaginação calunguinha sai voando e conhece pessoas inscríveis, aprende com elas e volta para contar pra sua mãe o que aprendeu"} props_alt_media={"Capa do podcast Calunguinha"} props_link_media={"https://open.spotify.com/show/2aUyIwcGitwiekGLVgg27v?si=6e383f8af5484d48"} />

                                <CardsMedia props_img_media={"../midia8.jpg"} props_h1_media={"PodCachos"} props_p_media={"Fala sobre a pluralidade do cabelo natural com curvatura (cachos, crespos, ondas), cuidados, corte, curvaturas, profissionais, produtos e muito mais!"} props_alt_media={"Capa do podcast Podcachos"} props_link_media={"https://open.spotify.com/show/0cAfG4kBLVD3fMyJ16Zqtx?si=b8f192a5855c42ce"} />

                                <CardsMedia props_img_media={"../midia9.png"} props_h1_media={"Minha Transição"} props_p_media={"A proposta é contar histórias de mulheres que passaram pela transição, essa época de muitas transformações internas e externas."} props_alt_media={"Capa do podcast minha transição"} props_link_media={"https://open.spotify.com/show/1rBVAvw0SLPcvSInm1HxrM"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-medias">
                    <Footer />
                </div>

        </>
    )
}

export default FamilyMedia