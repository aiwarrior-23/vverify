import { React, useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from './components/Footer';
import InfoSectionWithImage from './components/InfoSectionWithImage';
import InfoSectionWithImageRight from './components/InfoSectionWithImageRight';
import Modal from 'react-modal';
import Recipe from './components/Card';
import './App.css';
import FormDialog from './components/FormDialog';

Modal.setAppElement('#root');


function App() {
      const [loginIsOpen, setLoginIsOpen] = useState(false);

      function openLoginModal() {
            setLoginIsOpen(true);
      }

      function closeLoginModal() {
            setLoginIsOpen(false);
      }
      return (
            <div className="App">

                  <Router>
                        {/* <Header openLoginModal={openLoginModal} /> */}
                        <Routes>
                              <Route path="/login" element={<Login />} />
                              <Route path="/formdialog" element={<FormDialog />} />
                              <Route path="/" element={
                                    <>
                                          <Header />
                                          <Hero />
                                          <InfoSectionWithImage title="What is V-Verify" img="https://www.yoti.com/wp-content/uploads/Home_security_illustration.png" desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them.
When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself." />
                                          <InfoSectionWithImageRight title="How V-Verify Works" img="https://www.yoti.com/wp-content/uploads/Home_tech_for_good.png" desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them.
When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself." />
                                          <div>
                                                <h1 className='heading'>Services Provided</h1>
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
                                          <Link to="/formdialog">Go to Form Dialog</Link>
                                          <Footer />
                                    </>
                              } />
                        </Routes>

                        {/* Define other routes as needed */}
                  </Router>
            </div>
      );
}

export default App;