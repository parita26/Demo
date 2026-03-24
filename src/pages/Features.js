import React, { useEffect, useState } from 'react';

function Features() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    {
      title: 'Expert Team',
      description: 'Our experienced team ensures your project is delivered efficiently and successfully.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=150&h=150'
    },
    {
      title: 'Client-Focused',
      description: 'Your goals are our priority, and we tailor solutions to meet your needs.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=150&h=150'
    },
    {
      title: 'Scalable Systems',
      description: 'Our systems grow with your business, handling increased traffic and demand.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&h=150'
    },
    {
      title: 'Innovative Ideas',
      description: 'We constantly innovate to provide unique solutions for complex challenges.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=150&h=150'
    },
  ];

  const whyChooseUs = [
    { icon: '🏆', title: 'Award-Winning', description: 'Recognized industry leader with multiple awards.' },
    { icon: '💼', title: '500+ Projects', description: 'Successfully delivered over 500 projects worldwide.' },
    { icon: '🌎', title: 'Global Reach', description: 'Serving clients across multiple continents and industries.' },
    { icon: '🤝', title: 'Trusted Partners', description: 'Long-term partnerships with top businesses.' },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Acme Corp',
      message: 'Techstrota transformed our digital platform efficiently. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO, InnovateX',
      message: 'Professional team and excellent delivery. We saw amazing results.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Lee',
      role: 'Product Manager, NextGen Solutions',
      message: 'Creative and dedicated team. They exceeded our expectations!',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
  ];

  const clients = [
    'https://via.placeholder.com/120x60?text=Client+1',
    'https://via.placeholder.com/120x60?text=Client+2',
    'https://via.placeholder.com/120x60?text=Client+3',
    'https://via.placeholder.com/120x60?text=Client+4',
    'https://via.placeholder.com/120x60?text=Client+5',
  ];

  return (
    <div>
      <style>{`
        .features-container {
          background-color: #ffdde0;
          min-height: 100vh;
          padding: clamp(20px, 5vw, 50px);
          box-sizing: border-box;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .features-container h1 {
          margin-bottom: 10px;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
        }

        .features-container p {
          margin-bottom: 40px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          color: #333;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(15px, 3vw, 30px);
          width: 90%;
          max-width: clamp(300px, 90%, 1200px);
          margin: auto;
        }

        .feature-card {
          background-color: white;
          padding: clamp(15px, 3vw, 25px);
          border-radius: clamp(0.5rem, 1vw, 1rem);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: ${animate ? 'fadeUp 0.8s ease forwards' : 'none'};
          opacity: 0;
        }

        .feature-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .feature-image {
          width: clamp(70px, 15vw, 110px);
          height: clamp(70px, 15vw, 110px);
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }

        /* Why Choose Us Section */
        .why-choose-us {
          margin-top: clamp(50px, 5vw, 70px);
          padding: clamp(20px, 4vw, 40px);
          background-color: #fff;
          border-radius: clamp(0.5rem, 1vw, 1rem);
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          width: 90%;
          max-width: clamp(300px, 90%, 1200px);
          margin-left: auto;
          margin-right: auto;
        }

        .why-choose-us h2 {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: #ff5722;
          margin-bottom: clamp(15px, 3vw, 25px);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(20px, 3vw, 30px);
        }

        .why-card {
          padding: clamp(15px, 2.5vw, 25px);
          text-align: center;
          background: #ffe4e6;
          border-radius: clamp(0.5rem, 1vw, 1rem);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: ${animate ? 'flipIn 0.8s ease forwards' : 'none'};
          opacity: 0;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        .why-card span {
          font-size: clamp(2rem, 5vw, 3rem);
          display: block;
          margin-bottom: 10px;
        }

        .why-card h3 {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          margin-bottom: 8px;
        }

        .why-card p {
          font-size: clamp(0.9rem, 2vw, 1rem);
          margin: 0;
        }

        /* Testimonials Section */
        .testimonials {
          margin-top: clamp(60px, 6vw, 80px);
          padding: clamp(20px, 4vw, 40px);
          background-color: #fff;
          border-radius: clamp(0.5rem, 1vw, 1rem);
          box-shadow: 0 6px 15px rgba(0,0,0,0.08);
          width: 90%;
          max-width: clamp(300px, 90%, 1200px);
          margin-left: auto;
          margin-right: auto;
        }

        .testimonials h2 {
          color: #ff5722;
          margin-bottom: clamp(20px, 3vw, 25px);
        }

        .testimonial-card {
          text-align: center;
          padding: clamp(15px, 2vw, 25px);
          margin-bottom: clamp(15px, 3vw, 20px);
          border-radius: clamp(0.5rem, 1vw, 1rem);
          background: #ffe4e6;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          animation: ${animate ? 'slideUp 0.8s ease forwards' : 'none'};
          opacity: 0;
        }

        .testimonial-avatar {
          width: clamp(60px, 10vw, 80px);
          height: clamp(60px, 10vw, 80px);
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .testimonial-card h4 {
          margin: 5px 0;
          font-size: clamp(1rem, 2vw, 1.2rem);
        }

        .testimonial-card p {
          font-size: clamp(0.9rem, 2vw, 1rem);
          margin: 0;
          color: #333;
        }

        /* Clients Section */
        .clients {
          margin-top: clamp(50px, 5vw, 70px);
          padding: clamp(20px, 4vw, 40px);
          background-color: #fff;
          border-radius: clamp(0.5rem, 1vw, 1rem);
          width: 90%;
          max-width: clamp(300px, 90%, 1200px);
          margin-left: auto;
          margin-right: auto;
        }

        .clients h2 {
          color: #ff5722;
          margin-bottom: clamp(20px, 3vw, 25px);
        }

        .clients-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(15px, 3vw, 30px);
        }

        .clients-grid img {
          width: clamp(80px, 15vw, 120px);
          height: auto;
          object-fit: contain;
          filter: grayscale(80%);
          transition: filter 0.3s ease, transform 0.3s ease;
          animation: ${animate ? 'popIn 0.6s ease forwards' : 'none'};
          opacity: 0;
        }

        .clients-grid img:hover {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        /* Keyframes */
        @keyframes fadeUp {
          0% { transform: translateY(20px) scale(0.95); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes flipIn {
          0% { transform: rotateY(90deg); opacity: 0; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }

        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div className="features-container">
        <h1>Features</h1>
        <p>Discover what makes Techstrota Company the right choice for your business.</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.image} alt={feature.title} className="feature-image" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us</h2>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div className="why-card" key={index}>
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials">
          <h2>Customer Testimonials</h2>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <h4>{t.name}</h4>
              <p>{t.role}</p>
              <p>"{t.message}"</p>
            </div>
          ))}
        </div>

        <div className="clients">
          <h2>Our Clients</h2>
          <div className="clients-grid">
            {clients.map((logo, index) => (
              <img src={logo} alt={`Client ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;