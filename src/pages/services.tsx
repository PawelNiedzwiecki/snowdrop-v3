import type { HeadFC, PageProps } from 'gatsby';
import type React from 'react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import './services.css';

const ServicesPage: React.FC<PageProps> = () => {
  const services = [
    {
      title: 'Bridal Makeup',
      description:
        'Complete bridal makeup package including trial session, wedding day application, touch-up kit, and false lashes. Customized to your style and preferences.',
      price: 'From $200',
      icon: '👰',
    },
    {
      title: 'Bridal Party',
      description:
        'Group packages for bridesmaids and bridal party members. Special rates for multiple bookings on the same day.',
      price: 'From $80/person',
      icon: '💐',
    },
    {
      title: 'Special Events',
      description:
        'Perfect makeup for proms, galas, parties, and any special occasion. Long-lasting formulas that photograph beautifully.',
      price: 'From $100',
      icon: '🎉',
    },
    {
      title: 'Photo Shoots',
      description:
        'Professional makeup designed for camera and lighting conditions. Perfect for headshots, fashion, and editorial photography.',
      price: 'From $150',
      icon: '📸',
    },
    {
      title: 'Editorial & Fashion',
      description:
        'Creative and avant-garde makeup for fashion shows, editorial shoots, and artistic projects. Collaboration with photographers and stylists.',
      price: 'Custom Quote',
      icon: '🎨',
    },
    {
      title: 'Makeup Lessons',
      description:
        'One-on-one or group lessons teaching application techniques, product selection, and personalized tips for your unique features.',
      price: 'From $120',
      icon: '📚',
    },
  ];

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>Services & Pricing</h1>
          <p>Professional makeup artistry for every occasion</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-intro">
            <p>
              I offer a comprehensive range of makeup services tailored to your needs. Each service
              includes a detailed consultation to understand your preferences and ensure you receive
              the perfect look for your occasion.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="services-note">
            <h3>What's Included</h3>
            <ul>
              <li>Professional consultation</li>
              <li>High-quality, professional-grade products</li>
              <li>Custom color matching</li>
              <li>False lashes (where applicable)</li>
              <li>Professional application techniques</li>
              <li>Touch-up recommendations</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => (
  <>
    <title>Services & Pricing - Makeup Artist Portfolio</title>
    <meta
      name="description"
      content="Professional makeup services including bridal, events, photo shoots, and makeup lessons. View our services and pricing."
    />
  </>
);
