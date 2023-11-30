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
import Home from "./Pages/Home/Home";
import Payments from "./Pages/Payments/Payments";
import About from './Pages/AboutUs/About.jsx'
import ChildrenProfile from './Pages/ChildrenProfile/ChildrenProfile.jsx'
import CoverFive from './Pages/GameFive/CoverFive/CoverFive.jsx'
import TutorialFive from './Pages/GameFive/TutorialFive/TutorialFive.jsx'
import CoverFour from './Pages/GameFour/CoverFour/CoverFour.jsx'
import TutorialFour from './Pages/GameFour/TutorialFour/TutorialFour.jsx'
import CoverThree from './Pages/GameThree/CoverThree/CoverThree.jsx'
import TutorialThree from './Pages/GameThree/TutorialThree/TutorialThree.jsx'
import CoverTwo from './Pages/GameTwo/CoverTwo/CoverTwo.jsx'
import TutorialTwo from './Pages/GameTwo/TutorialTwo/TutorialTwo.jsx'
import CoverOne from './Pages/GameOne/CoverOne/CoverOne.jsx'
import TutorialOne from './Pages/GameOne/TutorialOne/TutorialOne.jsx'
import Game from './Pages/Games/CoversGames/Game.jsx'
import Tutorials from './Pages/Games/TutorialsGames/Tutorials.jsx'
import Partners from './components/PartnersCarousel/Partners.jsx'
import AllPartners from './Pages/Partners/AllPartners/AllPartners.jsx'
import BoxPlans from './Pages/BoxPlans/BoxPlans.jsx'


function RouterApp() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/pagamento" element={<Payments />}>Tela de Pagamento</Route>
        <Route path="/cadastro" element={<ParentRegistration />}>Cadastro</Route>
        <Route path="/cadastroc" element={<ChildRegistration />}>Cadastro Criança</Route>
        <Route path="/login" element={<Login />}>Login</Route>
        <Route path="/perfil" element={<Profile />}>Perfil</Route>
        <Route path="/editar" element={<EditProfile />}>Editar Perfil</Route>
        <Route path="/editarcrianca" element={<EditProfileChild />}>Editar Perfil Criança</Route>
        <Route path="/editarresponsavel" element={<EditProfileParents />}>Editar Perfil Pais</Route>
        <Route path="*" element={<Nopage />}>Editar Perfil</Route>
        <Route path='/perfilresponsavel' element={< Responsible />}>Perfil Responsável</Route>
        <Route path='/video1' element={< StepByStepVideo1 />}>Tutorial 1</Route>
        <Route path='/video2' element={< StepByStepVideo2 />}>Tutorial 2</Route>
        <Route path='/midias' element={< FamilyMedia />}>Mídias em família</Route>
        <Route path='/notas' element={< Notes />}>Notas</Route>
        <Route path="ia" element={<ImageClassification />} />
        <Route path="FaleConosco" element={<TelaFaleConosco />}></Route>
        <Route path="Form1" element={<Form1 />}></Route>
        <Route path="Form2" element={<Form2 />} ></Route>
        <Route path="Form3" element={<Form3 />} ></Route>
        <Route path="TelaFinal" element={<TelaFinal />}></Route>
        <Route path="Parceiros" element={<AllPartners />}></Route>
        <Route path='/sobrenos' element={< About/>}></Route> 
        <Route path='/perfilcrianca' element={< ChildrenProfile/>}></Route> 
        <Route path='/jogo1' element={< CoverOne/>}></Route> 
        <Route path='/jogo2' element={< CoverTwo/>}></Route> 
        <Route path='/jogo3' element={< CoverThree/>}></Route> 
        <Route path='/jogo4' element={< CoverFour/>}></Route> 
        <Route path='/jogo5' element={< CoverFive/>}></Route> 
        <Route path='/jogos' element={< Game/>}></Route> 
        <Route path='/tutoriais' element={< Tutorials/>}></Route> 
        <Route path='/tutorial1' element={< TutorialOne/>}></Route> 
        <Route path='/tutorial2' element={< TutorialTwo/>}></Route> 
        <Route path='/tutorial3' element={< TutorialThree/>}></Route> 
        <Route path='/tutorial4' element={< TutorialFour/>}></Route> 
        <Route path='/tutorial5' element={< TutorialFive/>}></Route> 
        <Route path='/posia' element={<BoxPlans />}></Route> 

      </Routes>

    </Router>

  )
}

export default RouterApp
