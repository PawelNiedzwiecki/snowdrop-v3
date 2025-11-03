import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="logo">
                <span className="logo-text">Makeup Artistry</span>
              </Link>
              <button
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" activeClassName="active-link">Home</Link></li>
                <li><Link to="/gallery" activeClassName="active-link">Gallery</Link></li>
                <li><Link to="/services" activeClassName="active-link">Services</Link></li>
                <li><Link to="/about" activeClassName="active-link">About</Link></li>
                <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Makeup Artistry</h3>
              <p>Transforming beauty through artistry</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Makeup Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
