import React from 'react';
import Header from './Header';
import Hero from './/Hero';
// import InfoSection from './components/InfoSection';
// import NewsSection from './components/NewsSection';
import Footer from './Footer';
import InfoSectionWithImage from './InfoSectionWithImage';
import InfoSectionWithImageRight from './InfoSectionWithImageRight';

function Home() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <InfoSectionWithImage title="What is V-Verify" img="https://www.yoti.com/wp-content/uploads/Home_security_illustration.png" desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them.
When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself." />
            <InfoSectionWithImageRight title="How V-Verify Works" img="https://www.yoti.com/wp-content/uploads/Home_tech_for_good.png" desc="The vVerify app is your secure digital ID. It’s the safe place to store your personal details, encrypted so only you can access them.
When you need to prove your age, identity or other details about yourself, you can securely share just the details required without revealing everything about yourself." />
            <Footer />
        </div>
    );
}

export default Home;