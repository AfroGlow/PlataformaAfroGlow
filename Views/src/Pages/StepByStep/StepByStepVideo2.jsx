import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"

const StepByStepVideo2 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../lavagem-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Lavagem e hidratação"}

                    props_iframe={"https://www.youtube.com/embed/c5ToToZi11A?si=EaAo5GQFHGHBPxyh"}

                    props_img={"../foto-shampoo.svg"} props_alt={"Imagem de shampoo e condicionador Salom Line Infantil"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Shampoo/condicionador "} props_products2={"Escova"}
                    props_title1={" - Aplique o Shampoo diretamente no couro cabeludo"}
                    props_title2={" - Massageie até formar espuma e sentir a raiz limpa"}
                    props_title3={" - Arraste a espuma formada pelos fios sem esfregar"}
                    props_title4={" - Aplique o Condicionador"}

                    props_p={"O shampoo é formulado principalmente para lavar o couro cabeludo, parte mais importante e essencial se queremos fios que cresçam com saúde. Ele não pode ter acúmulo de sebo, células mortas, umidade nem sujeira do dia a dia, por isso comece aplicando seu shampoo diretamente no couro e massageando suavemente, mas limpando de forma eficaz."}

                    props_p2={"Os movimentos não podem ser agressivos nem suaves demais. Se a crianças tem feridas, cuide das regiões onde elas estão para não machucá-las. Se ele(a) tem caspa e você sentir necessidade, lave 2x até sentir que couro está limpinho e sem resíduos. Essa limpeza não precisa levar mais que 2-3 minutos.  É importante ressaltar que não é preciso lavar o cumprimento dos fios."}

                    props_span2={"É importante ressaltar que não é preciso lavar o cumprimento dos fios."}

                    props_p3={"Os fios cacheados possuem cutículas mais sensíveis a danos, sendo a fricção durante o banho uma das principais causas. Simplesmente deslize a espuma pelos fios para realizar a limpeza necessária, removendo as partículas de sujeira. É crucial realizar todos os movimentos de lavagem da raiz às pontas, preservando a cutícula, e nunca o contrário ou lateralmente. Após esse processo, enxágue abundantemente. "}

                    props_p4={"Antes de aplicar o condicionador, umedeça o cabelo com água morna ou fria. Em seguida, aplique o condicionador nos fios da altura da orelha para baixo, massageando-o bem no comprimento do cabelo. Deixe agir por alguns minutos, seguindo as indicações de tempo na embalagem do produto. Após o período, enxágue completamente até remover todo o condicionador."} />
            </div>


        </>

    )
}
export default StepByStepVideo2