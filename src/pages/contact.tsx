import type { HeadFC, PageProps } from 'gatsby';
import type React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import './contact.css';

const ContactPage: React.FC<PageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your inquiry! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: '',
    });
  };

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Let's discuss how I can help you look your best</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                I'd love to hear from you! Whether you're interested in booking a service or just
                have a question, feel free to reach out.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <p>makeup@example.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h3>Location</h3>
                    <p>Available for travel within the metropolitan area</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <h3>Hours</h3>
                    <p>By appointment only</p>
                    <p className="hours-detail">Monday - Saturday: 8am - 8pm</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Follow Me</h3>
                <div className="social-links">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Pinterest
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="event">Special Event</option>
                    <option value="photoshoot">Photo Shoot</option>
                    <option value="lesson">Makeup Lesson</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <title>Contact - Makeup Artist Portfolio</title>
    <meta
      name="description"
      content="Get in touch to book a consultation or ask about our makeup artistry services. Available for weddings, events, and photo shoots."
    />
  </>
);
