import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Responsible from "./Pages/ResponsibleProfile/Responsible"
import StepByStepVideo1 from "./Pages/StepByStep/StepByStepVideo1"
import StepByStepVideo2 from "./Pages/StepByStep/StepByStepVideo2"
import FamilyMedia from "./Pages/FamilyMedia/FamilyMedia"
import Notes from './Pages/Notes/Notes'
import Form2 from './Pages/pagesIA/Form2/Form2.jsx'
import Form3 from './Pages/pagesIA/Form3/Form3.jsx'
import Form1 from './Pages/pagesIA/Form1/Form1.jsx'
import TelaFinal from './Pages/pagesIA/TelaFinal/TelaFinal.jsx'
import TelaFaleConosco from './Pages/pagesFaleConosco/telaFaleConosco.jsx'
import ImageClassification from './Pages/pagesIA/components/ImageClassification/index.jsx';
import ChildRegistration from "./Pages/ChildRegistration/ChildRegistration";
import ParentRegistration from "./Pages/ParentRegistration/ParentRegistration";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profiles/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import EditProfileChild from "./Pages/EditProfileChild/EditProfileChild";
import Nopage from "./Pages/Nopage/Nopage";
import EditProfileParents from "./Pages/EditProfileParents/EditProfileParents";


function RouterApp() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentRegistration />}>Cadastro</Route>
        <Route path="/cadastroc" element={<ChildRegistration />}>Cadastro Criança</Route>
        <Route path="/login" element={<Login />}>Login</Route>
        <Route path="/perfil" element={<Profile />}>Perfil</Route>
        <Route path="/editar" element={<EditProfile />}>Editar Perfil</Route>
        <Route path="/editchild" element={<EditProfileChild />}>Editar Perfil Criança</Route>
        <Route path="/editparents" element={<EditProfileParents />}>Editar Perfil Pais</Route>
        <Route path="*" element={<Nopage />}>Editar Perfil</Route>
          <Route path='/responsibleprofile' element={< Responsible/>}>Perfil Responsável</Route> 
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
