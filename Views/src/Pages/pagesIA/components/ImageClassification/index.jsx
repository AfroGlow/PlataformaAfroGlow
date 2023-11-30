import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
// import modelJson from './AfroGlow_v2.json';
import { useDropzone } from 'react-dropzone'; 
import './index.css'
import InputForm from "../inputForm/input-form";
import ModalReconhecimentoCapilar from "../modal/modal-ia";

const ImageClassification = () => {
    const [image, setImage] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const classifyImage = async (imgTensor) => {
        setIsLoading(true);
        const model = await tf.loadLayersModel(modelJson);

        const predictions = await model.classify(imgTensor);
        setPredictions(predictions);
        setIsLoading(false);
    };
    
    const handleImageUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(file);
    };

    
    

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleImageUpload,
        accept: 'image/*',
        maxSize: 5000000,
        disabled: !!image, // Desabilita a zona de upload se uma imagem já foi enviada
    });

    return (
        <section className="wrapper">
            <div className="align-title-AI">
                <div className="titleAI">
            <h2 className="p-title-ia">Faça upload de uma foto, para nossa IA </h2>
            <div>
            <p className="p-title-ia p-general">analisar seu cabelo</p>
                           </div>
                           </div>
            </div>
            <div className="reqRes">
                <div className="box1" {...getRootProps()}>
                    <input {...getInputProps()} />
                  <div className="display-none">
                    
                   
      
                       
                        </div>
                   
                    {image &&  (
                         
                        <>
                        
                            <div className="img-wrapper">
                                <img className="img-wrapper-ia" src={image} alt="Uploaded" />
                            </div>
                           
                            <div className="App">
     
    </div>


                            <button className="btn-action"onClick={classifyImage}  >
                                {isLoading ? "Analisando..." : "Analisar"}
                            </button>
                        </>
                    )}
                </div>

                <div className="box2">
                <h3 className="title-box2-ia p-general">Resultado</h3>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Cacheado</p> <p className="purple-p-box2-ia p-general">95%</p>
                </div>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Ondulado</p> <p className="purple-p-box2-ia p-general">5%</p>
                </div>
                <div className="align-row-box2-ia">
                <p className="black-p-box2-ia p-general">Liso</p>    <p className="purple-p-box2-ia p-general">0%</p>
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
    );
};

export default ImageClassification;