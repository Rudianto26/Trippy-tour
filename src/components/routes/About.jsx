import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import heroimg from '../../assets/night.jpg';
import Footer from '../footer/Footer';
import AboutUs from '../about/AboutUs';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={heroimg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
