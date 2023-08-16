import React from 'react';
// import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-light">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
