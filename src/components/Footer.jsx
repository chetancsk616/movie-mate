import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
          <p className="copyright">
            &copy; {currentYear} Movie Mate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
