import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Form1 from './Form1.jsx'
import TelaFinal from './telaFinal.jsx'
import ImageClassification from './components/ImageClassification/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
         
         <Route path="ia" element={<ImageClassification />} />
          <Route index element={<Form1 />} />
          <Route path="Form2" element={<Form2 />} />
          <Route path="Form3" element={<Form3 />} />
          <Route path="TelaFinal" element={<TelaFinal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
