

import React from 'react';
import FAQ from '../../components/About/FAQ';
import Hero from '../../components/About/Hero';
import InsightSection from '../../components/About/InsightSection';
import VisionSection from '../../components/About/VisionSection';
import Contact from '../../components/About/Contact';
import Footer from '../../components/layout/Footer'



const About = () => {


  return (
    <>
      <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Hero />
        <InsightSection />
        <VisionSection />
        <Contact />
        <FAQ />
      </div>
      <Footer/>
    </>
  );
};

export default About;