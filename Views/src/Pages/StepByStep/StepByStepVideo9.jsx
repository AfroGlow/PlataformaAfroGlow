import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"
import Footer from "../../components/Footer/Footer"

const StepByStepVideo1 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../desembaraco-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Desembaraçamento e finalização "}
                    props_iframe={"https://www.youtube.com/embed/7jitGtfDgm8?si=Jo7LelQcP7GaqAYM_"}
                    props_img={"../creme-pentear.png"} props_alt={"Imagem de shampoo e condicionador Salom Line Infantil"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Creme de pentear "} props_products2={"Escova"}
                    props_title1={" - Divisão do Cabelo e Separação de Mechas"}
                    props_title2={" - Prenda com elásticos"}
                    props_title3={" -  Entrelaçamento das Mechas"}
                    props_title4={" - Finalização e Ajustes"}

                    props_p={"Comece o penteado dividindo o cabelo ao meio de forma precisa. Use um pente para criar uma separação limpa. Em seguida, escolha um lado e separe mechas de aproximadamente dois dedos de largura. Certifique-se de manter as mechas retas para um visual organizado."}

                    props_p2={"Para adicionar um toque de cor e coordenação ao penteado, utilize ligas amarelas para prender cada mecha. Divida cada mecha em duas partes e prenda a primeira parte na frente com a liga. Repita o processo com a segunda parte, utilizando a mesma cor de liga para manter a consistência visual."}

                    

                    props_p3={"Crie um padrão entrelaçado unindo as mechas das laterais. Comece com a mecha solitária, pegue a parte da frente, faça uma torção e prenda na mecha correspondente da fileira oposta. Continue esse padrão de entrelaçamento em diagonal, garantindo uma distribuição uniforme ao longo do penteado."}

                    props_p4={"Ao chegar à última mecha, prenda-a de forma simples, sem dividir em duas partes. Dedique um momento para ajustar e ajeitar as mechas, assegurando que o penteado fique equilibrado e estiloso. Se necessário, faça pequenos ajustes nos cachinhos ou no formato geral para um resultado final perfeito. Agora, seu penteado está pronto para um passeio rápido durante as férias, com um visual encantador e fácil de realizar."} />
            </div>

            <div className="footer-steps">
                <Footer />
                </div>
        </>

    )
}
export default StepByStepVideo1