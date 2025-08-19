// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <video className="hero-video" autoPlay muted loop playsInline src="/assets/hero.mp4"></video>
      <div className="hero-content">
        <h1>Edit Noir<span>.</span>Siddhu</h1>
        <p>Crafting Visual Stories in Every Pixel and Frame</p>
        <a href="#portfolio" className="cta-button">EXPLORE WORKS</a>
      </div>
    </section>
  );
}

export default Hero;