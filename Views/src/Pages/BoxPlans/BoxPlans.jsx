import { Link } from 'react-router-dom';
import './BoxPlans.css';

const BoxPlans = () => {
    return(
        <body className="Container-BoxPlans">
            <div className='purple-line-glowbox1'></div>
            <section className='section-box-plans'>
                <div className='logo-glowbox'><img src="logo-glowbox.png" alt="Logo GlowBox" /></div>
                <h1>Revolucione o seu cuidado capilar </h1>
                <div className='container-cards-glowbox'>
                    <article className='cards-glowbox'>
                        <h3>1°</h3>
                        <img src="icon-formulario.png" alt="" />
                        <p>Faça <span>upload</span> de uma foto do seu cabelo, e nossa <span>IA</span> irá analisar seu cabelo</p>
                    </article>
                    <article className='cards-glowbox'>
                        <h3>2°</h3>
                        <img src="Imagem-IA.png" alt="" />
                        <p>Preencha o <span>formulario</span> com mais informações do seu cabelo</p>
                    </article>
                    <article className='cards-glowbox'>
                        <h3>3°</h3>
                        <img src="icon-box.png" alt="" />
                        <p>Finalize e receba sua <span>Glowbox</span> personalizada em casa!</p>
                    </article>
                </div>
                <Link to="/ia"><button>Faça o teste</button></Link>
            </section>
            <div className='purple-line-glowbox2'></div>
            <section className='section-plans-box'>
            <h2>Assine seu plano</h2>
            <div className='container-provisorio'>
                <img src="GlowBox-Kids.png" alt="" />
                <img src="GlowBox.png" alt="" />
            </div>
            </section>
        </body>
    )
}

export default BoxPlans