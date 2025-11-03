import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import './about.css';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>About Me</h1>
          <p>Passionate about beauty and transformation</p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-intro">
            <div className="about-image">
              <div className="image-placeholder">
                <span>🎨</span>
              </div>
            </div>
            <div className="about-text">
              <h2>Hi, I'm Your Makeup Artist</h2>
              <p>
                With over 10 years of professional experience in the beauty industry,
                I've had the privilege of working with hundreds of clients, helping them
                look and feel their absolute best for their most important moments.
              </p>
              <p>
                My passion for makeup artistry began at a young age, and I've since
                trained with some of the industry's leading professionals. I specialize
                in creating looks that enhance your natural beauty while ensuring you
                feel confident and radiant.
              </p>
            </div>
          </div>

          <div className="about-philosophy">
            <h2>My Philosophy</h2>
            <p>
              I believe that makeup should enhance, not mask, your natural beauty. Every face
              is unique, and I take the time to understand your features, preferences, and the
              occasion to create a customized look that's perfect for you.
            </p>
          </div>

          <div className="about-experience">
            <h2>Experience & Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <h3>10+ Years</h3>
                <p>Professional Experience</p>
              </div>
              <div className="expertise-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="expertise-item">
                <h3>200+</h3>
                <p>Weddings</p>
              </div>
              <div className="expertise-item">
                <h3>Certified</h3>
                <p>Professional Makeup Artist</p>
              </div>
            </div>
          </div>

          <div className="about-specialties">
            <h2>Specialties</h2>
            <div className="specialties-list">
              <div className="specialty-item">
                <span className="specialty-icon">💍</span>
                <h3>Bridal Makeup</h3>
                <p>Expert in creating timeless, camera-ready bridal looks</p>
              </div>
              <div className="specialty-item">
                <span className="specialty-icon">📸</span>
                <h3>Photography Makeup</h3>
                <p>Specialized techniques for professional photography</p>
              </div>
              <div className="specialty-item">
                <span className="specialty-icon">🎭</span>
                <h3>Special Effects</h3>
                <p>Creative and editorial makeup for unique projects</p>
              </div>
              <div className="specialty-item">
                <span className="specialty-icon">🌟</span>
                <h3>Natural Beauty</h3>
                <p>Enhancing your features with subtle, natural looks</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Let's Create Something Beautiful</h2>
            <p>Ready to book your appointment or have questions? I'd love to hear from you!</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>About - Makeup Artist Portfolio</title>
    <meta name="description" content="Learn about our professional makeup artist with 10+ years of experience in bridal, editorial, and special event makeup." />
  </>
);
