import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import heroimg from '../../assets/12.jpg';
import Destination from '../destination/Destination';
import Trip from '../trip/Trip';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero cName="hero" heroImg={heroimg} title="Your Journey Your Story" text="Choose Your Favourite Destination." buttonText="Travel Plan" url="/" btnClass="show" />
      <Destination />
      <Trip />
      <Footer />
    </div>
  );
};

export default Home;
