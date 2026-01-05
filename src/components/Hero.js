import React from 'react';
import pfp from '../assets/profile-pic.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="profile-orbit">
              <div className="profile-orbit-inner">
                <img src={pfp} alt="Profile" height={200} width={200} />
              </div>
            </div>
            <div className="profile-pill">
              <span className="profile-pill-dot" />
              Open to work
            </div>
          </div>

          <div className="hero-right">
            <p className="hero-kicker">Personal Portfolio</p>
            <h1 className="hero-title">
              Farah Bakhtiar Huda, Full-Stack Engineer
            </h1>
            <p className="hero-subtitle">
              I specialize in designing and developing web applications, mainly focused on the backend, robust APIs, and databases.
            </p>
            <div className="hero-tags">
              <span className="hero-tag">React &amp; Node</span>
              <span className="hero-tag">TypeScript</span>
              <span className="hero-tag">UI engineering</span>
              <span className="hero-tag">System design</span>
            </div>
            <div className="hero-actions">
              <a href="https://github.com/SK-OTC" className="btn btn-primary" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href="https://www.linkedin.com/in/farah-bakhtiar-huda-780309372/" className="btn btn-primary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="hero-meta">
              <span>Over<strong>1</strong> year of experience coding and expanding areas of CS knowledge</span>
              <span>Learning and improving every day</span>
            </div>
          </div>
        </div>

        {/* Floating summary row */}
        <div id="work" className="floating-row">
          <article className="floating-card">
            <div className="floating-label">Highlights</div>
            <div className="floating-title">Recent Projects</div>
            <p className="floating-body">
              Developed an e-commerce platform (coming soon), Tetris using pygame without builtin collision detection (WIP), a blog site with Flask and SQLAlchemy, and a Solidity smart contract (coming soon).
            </p>
            <div className="floating-pills">
              <span className="floating-pill">React</span>
              <span className="floating-pill">Node.js</span>
              <span className="floating-pill">PostgreSQL</span>
              <span className="floating-pill">Solidity</span>
            </div>
          </article>

          <article className="floating-card">
            <div className="floating-label">Ideas</div>
            <div className="floating-title">Upcoming Projects</div>
            <p className="floating-body">
              Creating an e-commerce platform for a local business, building a web3 portfolio, and learning Rust for blockchain development.
            </p>
            <div className="floating-pills">
              <span className="floating-pill">E-Commerce</span>
              <span className="floating-pill">Design systems</span>
              <span className="floating-pill">Blockchain</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;