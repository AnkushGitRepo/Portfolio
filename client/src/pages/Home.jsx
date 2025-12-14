import React from 'react';
import Hero from '../components/Hero';
import SelectedWorks from '../components/SelectedWorks';
import Skills from '../components/Skills';
import AboutSection from '../components/AboutSection';
import Certification from '../components/Certification';
import ContactFooter from '../components/ContactFooter';

const Home = () => {
    return (
        <div className="px-0"> {/* Removing padding to allow full width backgrounds */}
            <Hero />
            <SelectedWorks />
            <Skills />
            <AboutSection />
            <Certification />
            <ContactFooter />
        </div>
    );
};

export default Home;
