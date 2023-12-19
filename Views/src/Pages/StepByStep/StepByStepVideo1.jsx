import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"
import Footer from "../../components/Footer/Footer"

const StepByStepVideo1 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../lavagem-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Lavagem e hidratação"}
                    props_iframe={"https://www.youtube.com/embed/sq_ik_-a42k?si=hSWwLYLOaRKN1C9_"}
                    props_img={"../foto-shampoo.svg"} props_alt={"Imagem de shampoo e condicionador Salom Line Infantil"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Shampoo/condicionador "} props_products2={"Escova"}
                    props_title1={" - Aplique o Shampoo diretamente no couro cabeludo"}
                    props_title2={" - Massageie até formar espuma e sentir a raiz limpa"}
                    props_title3={" - Arraste a espuma formada pelos fios sem esfregar"}
                    props_title4={" - Aplique o Condicionador"}
                    props_link_next={"/video2"}

                    props_p={"O shampoo é formulado principalmente para lavar o couro cabeludo, parte mais importante e essencial se queremos fios que cresçam com saúde. Ele não pode ter acúmulo de sebo, células mortas, umidade nem sujeira do dia a dia, por isso comece aplicando seu shampoo diretamente no couro e massageando suavemente, mas limpando de forma eficaz."}

                    props_p2={"Os movimentos não podem ser agressivos nem suaves demais. Se a crianças tem feridas, cuide das regiões onde elas estão para não machucá-las. Se ele(a) tem caspa e você sentir necessidade, lave 2x até sentir que couro está limpinho e sem resíduos. Essa limpeza não precisa levar mais que 2-3 minutos."}

                    props_span2={"É importante ressaltar que não é preciso lavar o cumprimento dos fios."}

                    props_p3={"Fios cacheados têm a cutícula mais suscetível a danos, e a fricção durante o banho é uma das formas mais comuns de agredi-las. O simples arraste da espuma pelos fios já é capaz de fazer a limpeza necessária, carregando as partículas de sujeira. Também é essencial que todo movimento de lavagem seja feito sempre da raiz às pontas para preservação da cutícula, nunca o contrário e nem lateralmente. Depois disso basta enxáguar e pronto. "}

                    props_p4={"Antes de aplicar o condicionador, é importante umidecer o cabelo (água morna ou fria). Logo após, aplique o condicionador nos fios da altura da orelha para baixo, massageie bem o produto no comprimento do cabelo e deixe agir por alguns minutos (o tempo estará especificado na embalagem do produto). Passado o tempo, enxágue o cabelo até todo condicionador ser removido completamente. "} />
            </div>

            
        </>

    )
}
export default StepByStepVideo1