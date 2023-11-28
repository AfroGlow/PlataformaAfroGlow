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

      </Routes>

    </Router>

  )

}

export default RouterApp
