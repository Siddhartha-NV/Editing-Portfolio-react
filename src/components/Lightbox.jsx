import React, { useEffect } from 'react';

function Lightbox({ item, onClose }) {
  if (!item) {
    return null;
  }

  useEffect(() => {
    document.body.classList.add('lightbox-active');
    return () => {
      document.body.classList.remove('lightbox-active');
    };
  }, []); 

  return (
    <div id="lightbox" className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}> 
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