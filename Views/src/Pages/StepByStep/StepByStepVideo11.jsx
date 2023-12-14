import "./StepByStep.css"
import TextStepByStep from "../../components/TextStepByStep/TextStepByStep"
import Footer from "../../components/Footer/Footer"

const StepByStepVideo11 = () => {
    return (

        <>
            <div className='step-by-step'>
                <TextStepByStep
                    props_img_title={"../pente-comum-icone.svg"}
                    props_alt_title={"ícone de shampoo amarelo"} props_p_title={"Módulo - Penteados "}
                    props_iframe={"https://www.youtube.com/embed/iizu1h5ua6I?si=jSCQd_Zb077dRmE-"}
                    props_img={"../creme-pentear.png"} props_alt={"Imagem de shampoo e condicionador Salom Line Infantil"} props_img2={"../foto-escova.svg"} props_alt2={"Imagem de escova de pentear cabelo amarela e de plástico"} props_products={"Creme de pentear "} props_products2={"Escova"}
                    props_title1={" - Preparação do Cabelo"}
                    props_title2={" - Divisão e Início da Trança Nagô"}
                    props_title3={" -  Continuação da Trança"}
                    props_title4={" - Finalização e Acabamento"}
                    props_link_next={"/video12"}

                    props_p={"Comece molhando suavemente o cabelo da criança para facilitar o manuseio. Aplique uma pequena quantidade de creme de pentear para garantir hidratação e maleabilidade. Desembarace cuidadosamente os fios com uma escova."}

                    props_p2={"Divida o cabelo em seções, começando na frente. Pegue uma pequena mecha, divida em três partes iguais e inicie a trança, passando a mecha lateral por baixo da central em direção à lateral oposta. Repita o movimento antes de adicionar mais cabelo à mecha lateral. Continue esse processo."}

                    

                    props_p3={"Continue a trança até chegar ao final do cabelo. Mantenha os dedos próximos ao couro cabeludo para facilitar os movimentos. Se necessário, umedeça o cabelo com água para manter a maleabilidade durante o processo."}

                    props_p4={"Una as tranças na parte de trás da cabeça, formando uma maria-chiquinha. Repita o processo na parte de trás, umedecendo e aplicando creme de pentear. Ao unir as tranças na parte de trás, deixe as pontas soltas para um acabamento natural. Abra a maria-chiquinha, ajuste para que fique redonda e adicione um acessório, se desejar. Lembre-se de manter os dedos próximos ao couro cabeludo para facilitar os movimentos da trança. Ajuste a tensão se sentir que está muito apertado e, ao finalizar, abra e ajuste o penteado conforme desejado."} />
            </div>

            <div className="footer-steps">
                <Footer />
                </div>
        </>

    )
}
export default StepByStepVideo11