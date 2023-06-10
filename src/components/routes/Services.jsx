import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import heroimg from '../../assets/1.jpg';
import Footer from '../footer/Footer';
import Trip from '../trip/Trip';

const Services = () => {
  return (
    <div>
      <h1>
        <Navbar />
        <Hero cName="hero-mid" heroImg={heroimg} title="Service" btnClass="hide" />
        <Trip />
        <Footer />
      </h1>
    </div>
  );
};

export default Services;
