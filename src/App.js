import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import InfoSectionWithImage from './components/InfoSectionWithImage';
import InfoSectionWithImageRight from './components/InfoSectionWithImageRight';
import Modal from 'react-modal';
import Recipe from './components/Card';
import './App.css';
import FormDialog from './components/FormDialog';
import AfterLogin from './components/AfterLogin';
import FormDialogRTW from './components/FormDialogRTW';
import RegistrationDialog from './components/RegistrationDialog';
import ClientTicker from './components/ClientTicker';
import VisualizationScale from './components/Statistics';
import YotiReference from './components/YotiReference';
import YotiForIndividual from './components/YotiForIndividuals';
import YotiForBusiness from './components/YotiForBusiness';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Tile from './components/Tile';
import Dummy from './components/Dummy';
import GradientBackground from './components/test';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App" style={{background:"white", maxWidth:"100%"}}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/formdialog" element={<FormDialog />} />
          <Route path="/rtw" element={<FormDialogRTW />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          <Route path="/register" element={<RegistrationDialog />} />
          <Route path="/vverifyIndividual" element={<YotiForIndividual />} />
          <Route path="/vverifyBusiness" element={<YotiForBusiness />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route
            path="/"
            element={
              <>
                {/* <Header /> */}
                <GradientBackground />
                  <ClientTicker />
                  <InfoSectionWithImageRight
                    title="How V-Verify Works"
                    img="10.png"
                    desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them. When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself."
                    clsH="heading"
                    clsP ="paragraph"
                  />
                  <div>
                <h1 className="heading" id='services'>Services Provided</h1>
                <section className="recipe-container">
                  <Recipe
                    img="EDBS2.gif"
                    desc="Enhanced Disclosure and Barring Service"
                  />
                  <Recipe
                    img="DBS.gif"
                    desc="Disclosure and Barring Service"
                  />
                  <Recipe
                    img="RTW.gif"
                    desc="Right to Work Check"
                  />
                  <Recipe
                    img="iCheck.gif"
                    desc="Digital Identification Check"
                  />
                </section>
                </div>
                <YotiReference />
                <VisualizationScale />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
