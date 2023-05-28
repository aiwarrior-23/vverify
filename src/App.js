import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Hero from './components/Hero';
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

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App" style={{background:"linear-gradient(to right, #b0cefa, white)"}}>
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
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="info-sections" style={{width:"100%", justifyContent: "center"}}>
                <Tile
                    title="Your Background Screening Expert"
                    img="1.png"
                    desc="We make it safer for people to prove who they are."
                    clsH="heading"
                    clsP ="paragraph"
                  />
                  <div style={{marginTop:"-15vh"}}>
                  <InfoSectionWithImage
                    title="What is V-Verify"
                    img="https://loginid.io/_ipx/_/authenticated-payments.png"
                    desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them. When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself."
                    clsH="heading"
                    clsP ="paragraph"
                  />
                  </div>
                  </div>
                  <InfoSectionWithImageRight
                    title="How V-Verify Works"
                    img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                    desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them. When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself."
                    clsH="heading"
                    clsP ="paragraph"
                  />
                  <div>
                <h1 className="heading">Services Provided</h1>
                <section className="recipe-container">
                  <Recipe
                    title="Enhanced DBS"
                    img="https://www.ucheck.co.uk/wp-content/uploads/list-icon-with-checkmark.svg"
                  />
                  <Recipe
                    title="Basic DBS"
                    img="https://www.ucheck.co.uk/wp-content/uploads/paper-check-mark.svg"
                  />
                  <Recipe
                    title="RTW"
                    img="https://www.ucheck.co.uk/wp-content/uploads/scale-icon.svg"
                  />
                  <Recipe
                    title="Identity Check"
                    img="https://www.ucheck.co.uk/wp-content/uploads/identity-check-icon.svg"
                  />
                </section>
                </div>
                <YotiReference />
                <ClientTicker />
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
