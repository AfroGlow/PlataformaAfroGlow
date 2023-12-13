import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Link } from "react-router-dom";
// import modelJson from './AfroGlow_v2.json';
import { useDropzone } from 'react-dropzone'; 
import './index.css'
import InputForm from "../inputForm/input-form";
import ModalReconhecimentoCapilar from "../modal/modal-ia";

const ImageClassification = () => {
    const [image, setImage] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [mostrarDiv, setMostrarDiv] = useState(true);
    const [mostrarDiv2, setMostrarDiv2] = useState(false);
    const [mostrarDiv3, setMostrarDiv3] = useState(true);
    const [meuHTML, setMeuHTML] = useState('0%');
    const [meuHTML2, setMeuHTML2] = useState('0%');
    const [meuHTML3, setMeuHTML3] = useState('0%');
    const [meuHTML4, setMeuHTML4] = useState('0%');


    const classifyImage = async (imgTensor) => {
        setIsLoading(true);
        const model = await tf.loadLayersModel(modelJson);

        const predictions = await model.classify(imgTensor);
        setPredictions(predictions);
        setIsLoading(false);
    };

   
    
    const  handleImageUpload = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(file);
        setMostrarDiv(!mostrarDiv);
        setMostrarDiv2(!mostrarDiv2);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setMostrarDiv2(!mostrarDiv3);
        setMeuHTML('90%')
        setMeuHTML2('2%')
        setMeuHTML3('1%')
        setMeuHTML4('7%')
        
    };

    
    

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageUpload,
        accept: 'image/*',
        maxSize: 5000000,
        disabled: !!image, // Desabilita a zona de upload se uma imagem já foi enviada
    });

    return (
        <>
        <Link to="/planosia"><img className='imgBackIa' src="./botaoEsquerda.svg" alt="botao de voltar" /></Link>
        <section className="wrapper">
            
            <div className="align-title-AI">
                <div className="titleAI">
            <h2 className="p-title-ia ">Faça upload de uma foto, para nossa IA </h2>
            <div>
            <p className="p-title-ia p-general">analisar seu cabelo</p>
                           </div>
                           </div>
            </div>
            <div className="reqRes">
                <div className="box1" {...getRootProps()}>
                    <input {...getInputProps()} />

                
      {mostrarDiv && (
        <div  style={{ display: 'block'}}>
          <img src="./upload.png" alt="" />
        </div>
      )}
      {mostrarDiv2 && (
        <div  style={{ display: 'block'}}>
          <p className="p-analisando-box1-ia">Analisando ...</p>
        </div>
      )}
                  <div className="display-none">
                    
                   
      
                       
                        </div>
                   
                    {image &&  (

                          
                         
                         
                        <>
                        
                            <div className="img-wrapper">
                                <img className="img-wrapper-ia" src={image} alt="Uploaded" />
                            </div>
                           
                            <div className="App">
     
    </div>

                        </>
                    )}
                </div>

                <div className="box2">
                <h3 className="title-box2-ia p-general">Resultado</h3>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Crespo</p> <div dangerouslySetInnerHTML={{ __html: meuHTML4 }} className="purple-p-box2-ia p-general"/>
                </div>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Cacheado</p> <div dangerouslySetInnerHTML={{ __html: meuHTML }} className="purple-p-box2-ia p-general"/>
                </div>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Ondulado</p> <div dangerouslySetInnerHTML={{ __html: meuHTML2 }} className="purple-p-box2-ia p-general"/>
                </div>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Liso</p>    <div dangerouslySetInnerHTML={{ __html: meuHTML3 }} className="purple-p-box2-ia p-general"/>
                </div>
                <div className="align-btn-box2-ia">
                <ModalReconhecimentoCapilar/>
                </div>
                    {predictions.length > 0 && (
                        <>

                        
                            <h3 className="title">Resultado</h3>
                            <ul className="list-result">
                                {predictions.map((prediction, index) => (
                                    <li key={index} className="result">
                                        {prediction.className} :{" "}
                                        <strong>{Math.round(prediction.probability * 100)}%</strong>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </section>
        </>
    );
};

export default ImageClassification;