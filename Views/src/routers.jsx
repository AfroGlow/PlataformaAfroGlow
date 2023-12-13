import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './Pages/AboutUs/About.jsx';
import AllPartners from './Pages/Partners/AllPartners/AllPartners.jsx';
import ChildRegistration from './Pages/ChildRegistration/ChildRegistration';
import ChildrenProfile from './Pages/ChildrenProfile/ChildrenProfile.jsx';
import ConditionerGameTwo from './Pages/GameTwo/GameTwoGame/ConditionerGameTwo/GameTwoGame.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import CoverFive from './Pages/GameFive/CoverFive/CoverFive.jsx';
import CoverFour from './Pages/GameFour/CoverFour/CoverFour.jsx';
import CoverOne from './Pages/GameOne/CoverOne/CoverOne.jsx';
import CoverThree from './Pages/GameThree/CoverThree/CoverThree.jsx';
import CoverTwo from './Pages/GameTwo/CoverTwo/CoverTwo.jsx';
import EditProfile from './Pages/EditProfile/EditProfile';
import EditProfileChild from './Pages/EditProfileChild/EditProfileChild';
import EditProfileParents from './Pages/EditProfileParents/EditProfileParents';
import FamilyMedia from './Pages/FamilyMedia/FamilyMedia';
import FinishGameThree from './Pages/GameThree/FinishGameThree/FinishGameThree.jsx';
import FinishGameTwo from './Pages/GameTwo/GameTwoGame/FinishGameTwo/GameTwoGame.jsx';
import Form1 from './Pages/pagesIA/Form1/Form1.jsx';
import Form2 from './Pages/pagesIA/Form2/Form2.jsx';
import Form3 from './Pages/pagesIA/Form3/Form3.jsx';
import Game from './Pages/Games/CoversGames/Game.jsx';
import HairTypes from './Pages/GameThree/HairTypes/HairTypes.jsx';
import Home from './Pages/Home/Home';
import ImageClassification from './Pages/pagesIA/components/ImageClassification/index.jsx';
import Login from './Pages/Login/Login';
import MemoryGame from './Pages/GameThree/MemoryGame/MemoryGame.jsx';
import Nopage from './Pages/Nopage/Nopage';
import Notes from './Pages/Notes/Notes';
import ParentRegistration from './Pages/ParentRegistration/ParentRegistration';
import Payments from './Pages/Payments/Payments';
import PaymentsFree from './Pages/Payments/PaymentsFree.jsx';
import PaymentsPlus from './Pages/Payments/PaymentsPlus.jsx';
import PaymentsPremium from './Pages/Payments/PaymentsPremium.jsx';
import PlanesIa from './Pages/pagesIA/PlanesIa/PlanesIaScreen.jsx';
import Profile from './Pages/Profiles/Profile';
import Responsible from './Pages/ResponsibleProfile/Responsible';
import ScreenFour from './Pages/GameOne/ScreenFour/ScreenFour.jsx';
import ScreenOne from './Pages/GameOne/ScreenOne/ScreenOne.jsx';
import ScreenThree from './Pages/GameOne/ScreenThree/ScreenThree.jsx';
import ScreenTwo from './Pages/GameOne/ScreenTwo/ScreenTwo.jsx';
import ShampooGameTwo from './Pages/GameTwo/GameTwoGame/ShampooGameTwo/GameTwoGame.jsx';
import StepByStepVideo1 from './Pages/StepByStep/StepByStepVideo1';
import StepByStepVideo2 from './Pages/StepByStep/StepByStepVideo2';
import StepByStepVideo9 from './Pages/StepByStep/StepByStepVideo9.jsx';
import TelaFinal from './Pages/pagesIA/TelaFinal/TelaFinal.jsx';
import TutorialFive from './Pages/GameFive/TutorialFive/TutorialFive.jsx';
import TutorialFour from './Pages/GameFour/TutorialFour/TutorialFour.jsx';
import TutorialOne from './Pages/GameOne/TutorialOne/TutorialOne.jsx';
import TutorialThree from './Pages/GameThree/TutorialThree/TutorialThree.jsx';
import TutorialTwo from './Pages/GameTwo/TutorialTwo/TutorialTwo.jsx';
import Tutorials from './Pages/Games/TutorialsGames/Tutorials.jsx';

function RouterApp() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/pagamento" element={<Payments />}>Tela de Pagamento</Route>
        <Route path="/pagamento-planobasic" element={<PaymentsFree />}>Tela de Pagamento</Route>
        <Route path="/pagamento-planoplus" element={<PaymentsPlus />}>Tela de Pagamento</Route>
        <Route path="/pagamento-planopremium" element={<PaymentsPremium />}>Tela de Pagamento</Route>
        <Route path="/cadastro" element={<ParentRegistration />}>Cadastro</Route>
        <Route path="/cadastrocrianca" element={<ChildRegistration />}>Cadastro Criança</Route>
        <Route path="/login" element={<Login />}>Login</Route>
        <Route path="/perfil" element={<Profile />}>Perfil</Route>
        <Route path="/editar" element={<EditProfile />}>Editar Perfil</Route>
        <Route path="/editarcrianca" element={<EditProfileChild />}>Editar Perfil Criança</Route>
        <Route path="/editarresponsavel" element={<EditProfileParents />}>Editar Perfil Pais</Route>
        <Route path="*" element={<Nopage />}>Editar Perfil</Route>
        <Route path='/perfilresponsavel' element={< Responsible />}>Perfil Responsável</Route>
        <Route path='/video1' element={< StepByStepVideo1 />}>Tutorial 1</Route>
        <Route path='/video2' element={< StepByStepVideo2 />}>Tutorial 2</Route>
        <Route path='/video9' element={< StepByStepVideo9 />}>Tutorial 2</Route>
        <Route path='/midias' element={< FamilyMedia />}>Mídias em família</Route>
        <Route path='/notas' element={< Notes />}>Notas</Route>
        <Route path="/ia" element={<ImageClassification />} />
        <Route path="planosia" element={<PlanesIa />} />
        <Route path="/faleconosco" element={<ContactUs />}></Route>
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
        <Route path='/jogo2-jogoShampoo' element={< ShampooGameTwo/>}></Route> 
        <Route path='/jogo2-jogoCondicionador' element={< ConditionerGameTwo/>}></Route> 
        <Route path='/jogo2-conclusao' element={< FinishGameTwo/>}></Route> 
        <Route path='/jogo1tela1' element={< ScreenOne/>}></Route> 
        <Route path='/jogo1tela2' element={< ScreenTwo/>}></Route> 
        <Route path='/jogo1tela3' element={< ScreenThree/>}></Route> 
        <Route path='/jogo1tela4' element={< ScreenFour/>}></Route> 
        <Route path='/jogo3tela4' element={<MemoryGame />}></Route> 
        <Route path='/jogo3tela2' element={<HairTypes />}></Route> 
        <Route path='/jogo3-conclusao' element={<FinishGameThree />}></Route> 
      </Routes>
    </Router>

  )
}

export default RouterApp
