import React from "react";
import CadastroC from "./pages/ChildRegistration/ChildRegistration";
import CadastroR from "./pages/ParentRegistration/ParentRegistration";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Profiles/Profile";
import EditarPerfil from "./pages/EditProfile/EditProfile";
import Nopage from "./pages/Nopage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function AppRouters (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<CadastroR/>}>Cadastro</Route>
                <Route path="cadastroc" element={<CadastroC/>}>Cadastro Criança</Route>
                <Route path="login" element={<Login/>}>Login</Route>
                <Route path="perfil" element={<Perfil/>}>Perfil</Route>
                <Route path="editar" element={<EditarPerfil/>}>Editar Perfil</Route>
                <Route path="*" element={<Nopage/>}>Editar Perfil</Route>
            </Routes>
        </Router>
    )
}
 export default AppRouters
