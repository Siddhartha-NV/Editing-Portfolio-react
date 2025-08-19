// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData';

function Portfolio({ onItemClick }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = ['all', 'Graphic Design', 'Photo Editing', 'Motion Graphic', 'Video Editing'];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>My Timeline</h2>
        <div className="filter-buttons">
          {filterCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category === 'all' ? 'All Works' : category}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="portfolio-item"
              onClick={() => onItemClick(item)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} />
              ) : (
                <video src={item.src} loop muted playsInline />
              )}
              {/* === THIS IS THE ADDED OVERLAY === */}
              <div className="item-overlay"></div>
              {/* ================================ */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;