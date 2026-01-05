import React from 'react';

const Header = () => {
  return (
    <header className="frame-header">
      <div className="frame-brand">
      </div>
      <nav className="frame-nav">
        <a href="#home" className="frame-nav-link">Overview</a>
        <a href="#work" className="frame-nav-link">Work</a>
        <a href="#skills" className="frame-nav-link">Skills</a>
        <a href="#faq" className="frame-nav-link">FAQ</a>
      </nav>
    </header>
  );
};

export default Header;