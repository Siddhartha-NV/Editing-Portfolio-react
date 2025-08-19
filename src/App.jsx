import React, { useState } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
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
      <Lightbox item={selectedItem} onClose={handleCloseLightbox} />
    </>
  );
}

export default App;