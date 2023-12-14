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
                    props_title3={" - Aplique o Condicionador"}
                    props_title4={" - Desembaraço e Finalização"}
                    props_link_next={"/video3"}

                    props_p={"Comece preparando a criança para o banho, assegurando um ambiente confortável e seguro. Enxágue suavemente o cabelo com água morna, garantindo que a criança se sinta relaxada durante esse processo."}

                    props_p2={"Escolha um shampoo suave e adequado para cabelos infantis. Aplique o shampoo apenas no couro cabeludo da criança, massageando delicadamente com as pontas dos dedos. Transforme essa etapa em uma brincadeira, usando espuma para criar formas divertidas e envolvendo a criança no processo."}

                    props_span2={"É importante ressaltar que não é preciso lavar o cumprimento dos fios."}

                    props_p3={"Após enxaguar o shampoo, aplique um condicionador suave nas pontas do cabelo da criança, evitando a região próxima à raiz. Faça disso uma experiência agradável, incentivando a criança a participar do processo, seja com uma massagem suave ou até mesmo deixando-a escolher um condicionador com um aroma agradável."}

                    props_p4={"Retire o excesso de água com as mãos e, para evitar o frizz, seque o cabelo com um tecido de algodão. Transforme a secagem em um momento lúdico, incentivando a criança a participar e se divertir durante essa etapa. "} />
            </div>


        </>

    )
}
export default StepByStepVideo2
