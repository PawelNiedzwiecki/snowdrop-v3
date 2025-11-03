import React from 'react';
import { Link } from 'gatsby';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Transforming Beauty Through Artistry</h1>
          <p className="hero-subtitle">
            Professional makeup artistry for every occasion - weddings, special events, and photoshoots
          </p>
          <div className="hero-buttons">
            <Link to="/gallery" className="btn btn-primary">
              View Gallery
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
