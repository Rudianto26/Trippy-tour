import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import heroimg from '../../assets/2.jpg';
import Footer from '../footer/Footer';
import ContactForm from '../contact/Contact';

const Contact = () => {
  return (
    <div>
      <h1>
        <Navbar />
        <Hero cName="hero-mid" heroImg={heroimg} title="Contact" btnClass="hide" />
        <ContactForm />
        <Footer />
      </h1>
    </div>
  );
};

export default Contact;
