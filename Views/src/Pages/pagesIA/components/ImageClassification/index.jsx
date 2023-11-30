import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { useDropzone } from 'react-dropzone'; 
import './index.css'
import InputForm from "../inputForm/input-form";
import ModalReconhecimentoCapilar from "../modal/modal-ia";

const ImageClassification = () => {
    const [image, setImage] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadModel = async () => {
        const model = await tf.loadLayersModel('/path/to/AfroGlow_v2.json');
        return model;
    };

    const classifyImage = async (imgTensor) => {
        setIsLoading(true);
        const model = await loadModel();
        const predictions = await model.classify(imgTensor);
        setPredictions(predictions);
        setIsLoading(false);
    };

    const handleImageUpload = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImage(URL.createObjectURL(file));
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
                {/* ... (código anterior) ... */}
            </div>

            <div className="reqRes">
                <div className="box1" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {/* ... (código anterior) ... */}
                    {image && (
                        <>
                            <div className="img-wrapper">
                                <img className="img-wrapper-ia" src={image} alt="Uploaded" />
                            </div>

                            <div className="App"></div>

                            <button className="btn-action" onClick={classifyImage}>
                                {isLoading ? "Analisando..." : "Analisar"}
                            </button>
                        </>
                    )}
                </div>

                <div className="box2">
                    <h3 className="title-box2-ia p-general">Resultado</h3>
                    {/* ... (código anterior) ... */}
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
