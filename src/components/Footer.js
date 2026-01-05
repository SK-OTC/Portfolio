import React from 'react';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Farah. All rights reserved.</span>
        <div className="social-links">
          <a href="https://github.com/SK-OTC" target="_blank" rel="noreferrer">
            <img src={githubLogo} alt="GitHub" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
          </a>
          <a href="https://www.linkedin.com/in/farah-bakhtiar-huda-780309372/" target="_blank" rel="noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: '26px', height: '26px', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;