import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">❓ Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Are you open to work or an internship/Looking for a job?</h3>
            <p><strike>Yes, I am currently open to new opportunities and looking for a job.</strike></p>
            <p>Yes.</p>
          </div>
          <div className="faq-item">
            <h3>What technologies do you work with?</h3>
            <p>I mainly use React, Node.js, TypeScript, and some databases like PostgreSQL, Redis and MongoDB (minimal exposure). I'm also somewhat experienced with cloud platforms like AWS.</p>
          </div>
          <div className="faq-item">
            <h3>Did you make this portfolio using AI?</h3>
            <p>Yes, in fact I did. Writing this portfolio on my own would take a lot of time and effort. However, it was a great learning experience to help me get started quickly. I used Cursor, until I ran out of tokens, and GitHub Copilot :)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;