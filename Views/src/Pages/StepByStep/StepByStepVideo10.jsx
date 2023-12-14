import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"
import Footer from "../../components/Footer/Footer"

const StepByStepVideo10 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../pente-comum-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Penteados "}
                    props_iframe={"https://www.youtube.com/embed/6afY9P2Qtks?si=g-3-uLL6btVXn0BV"}
                    props_img={"../elastico-cabelo.png"} props_alt={"Imagem de elásticos para prender os cabelos"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Elásticos de cabelo "} props_products2={"Escova"}
                    props_title1={" - Preparação do Cabelo"}
                    props_title2={" - Aplicação de Óleo Vegetal"}
                    props_title3={" -  Trança Nagô"}
                    props_title4={" - Cuidados e Dicas"}
                    props_link_next={"/video11"}

                    props_p={"Comece dividindo o cabelo em duas partes: a parte da frente e a parte de trás. Prenda a parte de trás para se concentrar apenas na frente. Desembarace o cabelo cuidadosamente das pontas até próximo ao couro cabeludo, utilizando um condicionador infantil ou creme de pentear, se necessário."}

                    props_p2={"Escolha um óleo vegetal, como óleo de coco ou azeite de oliva extra virgem. Aplique o óleo na mecha pequena da frente, garantindo que esteja desembaraçado. Penteie o cabelo com os dedos ou um pente de dentes largos para distribuir uniformemente o óleo."}

                    

                    props_p3={"Divida a mecha em três partes iguais e inicie a trança nagô. Trançar cuidadosamente até o final da mecha. Utilize elásticos de silicone para prender as pontas da trança. Repita esse processo em várias mechas pequenas na parte da frente do cabelo."}

                    props_p4={"Ao desfazer o penteado, recomendamos cortar os elásticos com uma tesoura, pois isso facilita o processo em vez de tentar remover com os dedos."} />
            </div>

            <div className="footer-steps">
                <Footer />
                </div>
        </>

    )
}
export default StepByStepVideo10