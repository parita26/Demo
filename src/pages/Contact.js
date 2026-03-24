import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setSuccessMessage(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <style>{`
        .contact-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: clamp(15px, 4vw, 40px);
          background: #f9f9f9;
          box-sizing: border-box;
          position: relative;
        }

        .contact-container {
          font-family: Arial, sans-serif;
          color: #333;
          width: 90%;
          max-width: clamp(300px, 90%, 900px);
          background: #fff;
          padding: clamp(20px, 4vw, 35px);
          border-radius: clamp(0.5rem, 1vw, 1rem);
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          box-sizing: border-box;
        }

        .contact-container h1 {
          text-align: center;
          margin-bottom: clamp(10px, 2vw, 20px);
          font-size: clamp(1.8rem, 5vw, 2.5rem);
        }

        .contact-container p {
          text-align: center;
          margin-bottom: clamp(15px, 3vw, 25px);
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #555;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 2vw, 15px);
          margin-bottom: clamp(20px, 4vw, 30px);
          text-align: center;
        }
        .contact-info span { font-weight: bold; color: #ff5722; }

        .office-hours {
          text-align: center;
          margin-bottom: clamp(20px, 4vw, 30px);
          color: #555;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: clamp(10px, 3vw, 20px);
          margin-bottom: clamp(20px, 4vw, 30px);
        }
        .social-links a { text-decoration: none; color: #555; font-weight: bold; transition: color 0.2s ease; }
        .social-links a:hover { color: #ff7f50; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 2vw, 18px);
        }

        .contact-form input,
        .contact-form textarea {
          padding: clamp(10px, 2.5vw, 14px);
          font-size: clamp(0.9rem, 2vw, 1rem);
          border-radius: clamp(0.3rem, 0.8vw, 0.5rem);
          border: 1px solid #ccc;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          transition: border 0.2s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #ff7f50;
        }

        .contact-form textarea {
          min-height: clamp(120px, 20vw, 160px);
          resize: vertical;
        }

        .contact-form button {
          padding: clamp(12px, 2.5vw, 16px);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          background-color: #ff7f50;
          color: #fff;
          border: none;
          border-radius: clamp(0.3rem, 0.8vw, 0.5rem);
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.15s ease;
          font-weight: bold;
        }

        .contact-form button:hover {
          background-color: #ff5722;
          transform: translateY(-2px);
        }

        .map {
          width: 100%;
          height: clamp(250px, 30vw, 350px);
          border-radius: clamp(0.5rem, 1vw, 1rem);
          margin-top: clamp(20px, 3vw, 30px);
          border: 0;
        }

        .success-message {
          color: green;
          font-weight: bold;
          text-align: center;
          margin-top: clamp(10px, 2vw, 15px);
        }

        /* Floating Help Button */
        .help-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #ff7f50;
          color: white;
          padding: 12px 18px;
          border-radius: 50px;
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: background 0.3s ease, transform 0.15s ease;
        }
        .help-btn:hover {
          background-color: #ff5722;
          transform: translateY(-3px);
        }

        @media (max-width: 500px) {
          .contact-container { padding: clamp(15px, 5vw, 25px); }
          .contact-container h1 { font-size: clamp(1.6rem, 6vw, 2rem); }
          .contact-container p { font-size: clamp(0.85rem, 3vw, 1rem); }
          .contact-form button { font-size: clamp(0.9rem, 3vw, 1rem); padding: clamp(10px, 4vw, 14px); }
        }
      `}</style>

      <div className="contact-wrapper">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have questions or want to work with Techstrota Company? Send us a message!</p>

          {/* Contact Info */}
          <div className="contact-info">
            <p><span>Phone:</span> +1 (555) 123-4567</p>
            <p><span>Email:</span> info@techstrota.com</p>
            <p><span>Address:</span> 123 Tech Street, Silicon Valley, CA, USA</p>
          </div>

          {/* Office Hours */}
          <div className="office-hours">
            <p><span>Office Hours:</span> Mon-Fri, 9:00 AM - 6:00 PM</p>
          </div>

          {/* Social Media */}
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {successMessage && <div className="success-message">{successMessage}</div>}

          {/* Map */}
          <iframe
            className="map"
            src="https://maps.google.com/maps?q=Silicon%20Valley&t=&z=14&ie=UTF8&iwloc=&output=embed"
            title="Techstrota Location"
          ></iframe>
        </div>

        {/* Floating Help Button */}
        <div className="help-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Need Help?
        </div>
      </div>
    </div>
  );
}

export default Contact;