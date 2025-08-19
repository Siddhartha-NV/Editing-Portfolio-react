// src/components/Lightbox.jsx
import React, { useEffect } from 'react';

function Lightbox({ item, onClose }) {
  // If no item is selected, render nothing
  if (!item) {
    return null;
  }

  // Effect to add/remove class from body to prevent scrolling when lightbox is open
  useEffect(() => {
    document.body.classList.add('lightbox-active');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('lightbox-active');
    };
  }, []); // Empty dependency array means this runs only once when the lightbox opens

  return (
    <div id="lightbox" className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside content */}
        <span id="lightbox-close" className="lightbox-close" onClick={onClose}>×</span>
        <div id="lightbox-media" className="lightbox-media">
          {item.type === 'image' ? (
            <img src={item.src} alt={item.title} />
          ) : (
            <video src={item.src} controls autoPlay loop />
          )}
        </div>
        <div id="lightbox-details" className="lightbox-details">
          <h3 id="lightbox-title">{item.title}</h3>
          <p id="lightbox-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;