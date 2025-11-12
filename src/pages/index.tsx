import type { HeadFC, PageProps } from 'gatsby';
import { Link } from 'gatsby';
import type React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import './index.css';

const IndexPage: React.FC<PageProps> = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      description:
        'Look stunning on your special day with professional bridal makeup that lasts all day long.',
      price: 'From $200',
      icon: '👰',
    },
    {
      title: 'Special Events',
      description:
        'Perfect makeup for proms, parties, galas, and any special occasion you want to shine.',
      price: 'From $100',
      icon: '🎉',
    },
    {
      title: 'Photo Shoots',
      description:
        'Camera-ready makeup designed specifically for photography and video production.',
      price: 'From $150',
      icon: '📸',
    },
  ];

  return (
    <Layout>
      <Hero />

      <section className="section about-preview">
        <div className="container">
          <h2 className="section-title">Welcome to Professional Makeup Artistry</h2>
          <div className="about-preview-content">
            <p>
              With over 10 years of experience in the beauty industry, I specialize in creating
              stunning, personalized looks that enhance your natural beauty. Whether it's your
              wedding day, a special event, or a professional photo shoot, I'm here to make you look
              and feel your absolute best.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Look?</h2>
            <p>Book a consultation today and let's create something beautiful together.</p>
            <Link to="/contact" className="btn btn-secondary">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Makeup Artist Portfolio - Professional Makeup Artistry</title>
    <meta
      name="description"
      content="Professional makeup artist specializing in bridal, events, and photoshoot makeup. Book your consultation today."
    />
  </>
);
