// src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  // This state will hold the portfolio item that needs to be shown in the lightbox.
  // It's null when the lightbox is closed.
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Hero />
      <Portfolio onItemClick={handleItemClick} />
      <About />
      <Contact />
      <Footer />
      {/* The Lightbox component is here, ready to be displayed when selectedItem is not null */}
      <Lightbox item={selectedItem} onClose={handleCloseLightbox} />
    </>
  );
}

export default App;