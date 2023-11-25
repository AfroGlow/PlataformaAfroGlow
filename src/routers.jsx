import React from "react";
import ChildRegistration from "./pages/ChildRegistration/ChildRegistration";
import ParentRegistration from "./pages/ParentRegistration/ParentRegistration";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profiles/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import EditProfileChild from "./pages/EditProfileChild/EditProfileChild";
import Nopage from "./pages/Nopage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function AppRouters (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<ParentRegistration/>}>Cadastro</Route>
                <Route path="cadastroc" element={<ChildRegistration/>}>Cadastro Criança</Route>
                <Route path="login" element={<Login/>}>Login</Route>
                <Route path="perfil" element={<Profile/>}>Perfil</Route>
                <Route path="editar" element={<EditProfile/>}>Editar Perfil</Route>
                <Route path="editchild" element={<EditProfileChild/>}>Editar Perfil Criança</Route>
                <Route path="*" element={<Nopage/>}>Editar Perfil</Route>
            </Routes>
        </Router>
    )
}
 export default AppRouters
