import React from 'react';
import Hero from "./Hero"
import Recipe from './Card';
import styles from "./ContactUs.module.css"
import InfoSectionWithImageRight from './InfoSectionWithImageRight';
import Header from './Header';

function AboutUs() {
    return (
        <div>
            <Header />
            <InfoSectionWithImageRight
                    title="Where we came from"
                    img="https://uploads-ssl.webflow.com/622f09894fc230ad07de84a9/62693081500de0f10bb1e8ae_Group%201579-p-500.webp"
                    desc="uCheck was started as a family business. It was founded by husband and wife Mike 
                    and Julie Griffiths, who made it their mission to make it quicker and easier for employers 
                    to get DBS and other pre-employment checks for their employees. They created a 
                    revolutionary HR Platform that allows businesses to perform various checks in one place – 
                    and uCheck was born. Mike and Julie’s son George always took a keen interest in the 
                    business and was taught to uphold the company motto: to always care about getting it right.                    
                    Today, uCheck is the largest DBS umbrella body in the UK, providing online solutions to over 30,000 organisations. With 17 years’ experience, our team are proud to be considered experts in the field of vetting and screening.
                    uCheck is recognised by the Disclosure and Barring Service (DBS – formerly the Criminal Record Bureau) as a top Responsible Organisation for Basic Checks and a Registered Umbrella Body for Standard and Enhanced Checks."
                    clsH="heading"
                    clsP ="paragraph"
                  />
        </div>
    );
}

export default AboutUs;
