// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img src="/mee.jpg" alt="Siddhu" />
          </div>
          <div className="about-content">
            <h3>Hello, I'm Siddhu</h3>
            <p>
              I am a passionate and detail-oriented visual artist specializing in video editing, motion graphics, and graphic design. With a keen eye for storytelling and a deep understanding of visual rhythm, I transform raw footage and static designs into compelling narratives that captivate and engage audiences.
            </p>
            <p>
              My journey began with a love for cinema and design, which evolved into a professional pursuit of creating high-quality visual content. Whether it's a dynamic commercial, an elegant logo animation, or a polished social media graphic, I bring dedication and creativity to every project.
            </p>
            <a href="#contact" className="cta-button">LET'S COLLABORATE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;