// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        <div className="contact-details">
          <div className="contact-card">
            <h4>Email Me</h4>
            <a href="mailto:mailtoeditzz@gmail.com">mailtoeditzz@gmail.com</a>
          </div>
          <div className="contact-card">
            <h4>Follow Me</h4>
            <a href="https://www.instagram.com/edit.noir_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;