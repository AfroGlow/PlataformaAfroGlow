import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"

const StepByStepVideo6 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../desembaraco-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Desembaraçamento e finalização "}

                    props_iframe={"https://www.youtube.com/embed/vSgvrjG7j90?si=4wEPLqazEdkxZ_8J"}
                    props_img={"../creme-pentear.png"} props_alt={"Imagem de shampoo e condicionador Salom Line Infantil"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Creme de pentear "} props_products2={"Escova"}
                    props_title1={" - Desembaraçar o Cabelo"}
                    props_title2={" - Dividir o Cabelo em Mechas"}
                    props_title3={" - Aplicar o Produto Adequado"}
                    props_title4={" -  Modelar e Deixar Secar"}
                    props_link_next={"/video7"}

                    props_p={"Comece o processo de finalização do cabelo da sua criança dedicando tempo para desembaraçar os fios com cuidado. Utilize um pente de dentes largos ou até mesmo os dedos para evitar qualquer desconforto. Comece pelas pontas e, com movimentos suaves, vá subindo em direção às raízes. O objetivo é remover os nós sem causar danos ao cabelo delicado."}

                    props_p2={"Dividir o cabelo em mechas é fundamental para garantir uma aplicação uniforme do produto de finalização. Use clipes para manter as seções separadas enquanto trabalha em cada uma delas. Ao dividir em partes menores, você facilita o processo, assegurando que todos os fios recebam a atenção necessária."}

                    props_p3={"Escolha com cuidado um produto de finalização formulado especialmente para cabelos infantis. Pode ser um creme de pentear, leave-in ou gel, dependendo do tipo de cabelo da criança. Coloque uma pequena quantidade do produto na palma das mãos e distribua-o uniformemente em cada mecha. Certifique-se de cobrir todos os fios para obter resultados mais eficazes."}

                    props_p4={"Com o produto aplicado, é hora de modelar o cabelo da criança de acordo com o estilo desejado. Seja criativo, mas evite puxar com força para não causar desconforto. Se a criança resistir, tenha paciência e seja gentil. Deixe o cabelo secar naturalmente para preservar a saúde dos fios, ou, se preferir, utilize um difusor no secador em temperatura baixa, mantendo uma distância segura."} />
            </div>


        </>

    )
}
export default StepByStepVideo6
