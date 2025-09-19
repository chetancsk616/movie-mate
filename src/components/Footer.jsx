import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Movie Mate</h3>
            <p className="footer-description">
              The ultimate platform for cinephiles to connect, watch, and discuss movies together.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Follow us on Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Join our Discord">
                <span>💬</span>
              </a>
              <a href="#" className="social-link" aria-label="Subscribe to our YouTube">
                <span>📺</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Features</h4>
            <ul className="footer-links">
              <li><a href="#features">Stream Room</a></li>
              <li><a href="#features">Chat Room</a></li>
              <li><a href="#features">OTT View</a></li>
              <li><a href="#features">Game Competitions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li><a href="#features">Debates</a></li>
              <li><a href="#features">Movie News</a></li>
              <li><a href="#features">Exclusive Discounts</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Movie Mate. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy</a>
            <a href="#" className="legal-link">Terms</a>
            <a href="#" className="legal-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
