import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
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
