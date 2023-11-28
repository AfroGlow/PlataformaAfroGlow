import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Responsible from "./Pages/ResponsibleProfile/Responsible"
import StepByStepVideo1 from "./Pages/StepByStep/StepByStepVideo1"
import StepByStepVideo2 from "./Pages/StepByStep/StepByStepVideo2"
import FamilyMedia from "./Pages/FamilyMedia/FamilyMedia"
import Notes from './Pages/Notes/Notes'
import Layout from "./Pages/pagesIA/Layout.jsx";
import Form2 from './Pages/pagesIA/Form2.jsx'
import Form3 from './Pages/pagesIA/Form3.jsx'
import Form1 from './Pages/pagesIA/Form1.jsx'
import TelaFinal from './Pages/pagesIA/TelaFinal.jsx'
import TelaFaleConosco from './Pages/pagesFaleConosco/telaFaleConosco.jsx'
import ImageClassification from './Pages/pagesIA/components/ImageClassification/index.jsx';






function RouterApp() {

    return (
        <Router>
         <Routes>
          <Route path='/' element={< Responsible/>}>Perfil Responsável</Route> 
          <Route path='/video1' element={< StepByStepVideo1/>}>Tutorial 1</Route> 
          <Route path='/video2' element={< StepByStepVideo2/>}>Tutorial 2</Route> 
          <Route path='/midias' element={< FamilyMedia/>}>Mídias em família</Route> 
          <Route path='/notas' element={< Notes />}>Notas</Route> 
          <Route path="ia" element={<ImageClassification />} />
          <Route path="FaleConosco" element={<TelaFaleConosco />} />
          <Route index element={<Form1 />} />
          <Route path="Form2" element={<Form2 />} />
          <Route path="Form3" element={<Form3 />} />
          <Route path="TelaFinal" element={<TelaFinal />} />

          
         </Routes>
         
        </Router>
      
      )

}

export default RouterApp
