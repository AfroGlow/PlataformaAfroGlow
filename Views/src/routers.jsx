import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Responsible from "./Pages/ResponsibleProfile/Responsible"
import StepByStepVideo1 from "./Pages/StepByStep/StepByStepVideo1"
import StepByStepVideo2 from "./Pages/StepByStep/StepByStepVideo2"
import FamilyMedia from "./Pages/FamilyMedia/FamilyMedia"
import Notes from './Pages/Notes/Notes'






function RouterApp() {

    return (
        <Router>
         <Routes>
          <Route path='/' element={< Responsible/>}>Perfil Responsável</Route> 
          <Route path='/video1' element={< StepByStepVideo1/>}>Tutorial 1</Route> 
          <Route path='/video2' element={< StepByStepVideo2/>}>Tutorial 2</Route> 
          <Route path='/midias' element={< FamilyMedia/>}>Mídias em família</Route> 
          <Route path='/notas' element={< Notes />}>Notas</Route> 

          
         </Routes>
         
        </Router>
      
      )

}

export default RouterApp
