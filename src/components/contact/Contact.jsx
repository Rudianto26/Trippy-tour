import './contact.css';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="form-contact">
      <h1>Send a message to us</h1>
      <form action="">
        <div>
          <label htmlFor="contactName">Name :</label>
          <input type="text" placeholder="Your name" id="contactName" />
        </div>
        <div>
          <label htmlFor="contactEmail">Email :</label>
          <input type="email" placeholder="Your email" id="contactEmail" />
        </div>
        <div>
          <label htmlFor="contactSubject">Subject :</label>
          <input type="text" placeholder="Subject" id="contactSubject" />
        </div>
        <label htmlFor="contactText">Message :</label>
        <textarea name="" id="contactText" cols="30" rows="10" placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
