import React, { useEffect, useState } from 'react';

function Services() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications tailored to your business needs.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps for iOS and Android with smooth performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop'
    },
    {
      title: 'UI/UX Design',
      description: 'User-focused design to enhance customer experience and engagement.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, social media, and campaigns to grow your online presence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      title: 'IT Consulting',
      description: 'Expert advice and strategies to optimize your technology investments.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop'
    }
  ];

  const features = [
    { icon: '🚀', title: 'Fast Delivery', description: 'We ensure quick and efficient project delivery.' },
    { icon: '💡', title: 'Innovative Solutions', description: 'Creative approaches to solve complex problems.' },
    { icon: '📈', title: 'Business Growth', description: 'Our services help scale your business effectively.' },
    { icon: '🤝', title: 'Client Support', description: '24/7 support to keep your operations running smoothly.' },
  ];

  const testimonials = [
    { name: 'Alice Johnson', feedback: 'Techstrota’s services transformed our digital presence!' },
    { name: 'Michael Lee', feedback: 'Professional and reliable team. Highly recommend for mobile apps.' },
  ];

  const packages = [
    { name: 'Basic', price: '$499', features: ['Landing Page', 'Responsive Design', 'Basic SEO'] },
    { name: 'Standard', price: '$999', features: ['Website', 'SEO Optimization', 'UI/UX Design', 'Analytics Setup'] },
    { name: 'Premium', price: '$1999', features: ['Web + Mobile App', 'Advanced SEO', 'Custom Design', 'Full Support'] },
  ];

  return (
    <div>
      <style>{`
        /* Base Styles */
        .services-wrapper { background: #f9f9f9; min-height: 100vh; padding: clamp(15px, 4vw, 50px); box-sizing: border-box; font-family: Arial, sans-serif; }
        .services-container { color: #333; width: 90%; max-width: clamp(300px, 90%, 1200px); margin: auto; }
        h1,h2 { text-align: center; color: #ff7f50; margin-bottom: clamp(15px, 3vw, 25px); }
        p { text-align: center; margin-bottom: clamp(25px, 4vw, 40px); color: #555; font-size: clamp(0.95rem, 2.5vw, 1.2rem); }

        /* Services Layout */
        .services-layout { display: flex; flex-direction: column; gap: clamp(25px, 5vw, 50px); }
        .service-card { display: flex; align-items: center; gap: clamp(15px, 3vw, 30px); flex-wrap: wrap; opacity: 0; animation: ${animate ? 'fadeSlideUp 0.8s ease forwards' : 'none'}; }
        .service-card.reverse { flex-direction: row-reverse; }
        .service-image-wrapper { flex: 1; min-width: 260px; }
        .service-image { width: 100%; height: clamp(180px, 25vw, 260px); object-fit: cover; border-radius: clamp(0.5rem, 1vw, 1rem); }
        .service-text { flex: 1; min-width: 260px; }
        .service-text h3 { margin-bottom: clamp(8px, 2vw, 12px); font-size: clamp(1.2rem, 3vw, 1.6rem); }
        .service-text p { color: #555; line-height: 1.6; font-size: clamp(0.95rem, 2vw, 1.1rem); }

        /* Features Section */
        .features-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: clamp(15px, 3vw, 30px); margin: clamp(40px, 5vw, 60px) 0; }
        .feature-card { background: #fff; padding: clamp(15px, 3vw, 25px); border-radius: clamp(0.5rem, 1vw, 1rem); box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; transition: transform 0.25s ease; opacity: 0; animation: ${animate ? 'popIn 0.8s ease forwards' : 'none'}; }
        .feature-card:hover { transform: translateY(-5px) scale(1.03); }
        .feature-card span { font-size: clamp(2rem, 5vw, 3rem); display: block; margin-bottom: 10px; }

        /* Packages Section */
        .packages-section { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(20px, 5vw, 40px); margin: clamp(50px, 5vw, 70px) 0; }
        .package-card { background: #fff; padding: clamp(20px, 3vw, 30px); border-radius: clamp(0.5rem, 1vw, 1rem); box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; transition: transform 0.25s ease; opacity: 0; animation: ${animate ? 'scaleFade 0.8s ease forwards' : 'none'}; }
        .package-card:hover { transform: translateY(-5px) scale(1.02); }
        .package-card h3 { font-size: clamp(1.3rem, 2.5vw, 1.6rem); margin-bottom: 10px; }
        .package-card p { font-size: clamp(1rem, 2vw, 1.2rem); margin-bottom: 10px; font-weight: bold; color: #ff7f50; }
        .package-card ul { list-style: none; padding: 0; margin: 0; font-size: clamp(0.9rem, 2vw, 1rem); color: #555; }

        /* Testimonials */
        .testimonials-section { margin-top: clamp(50px, 5vw, 70px); }
        .testimonial-card { background: #fff; padding: clamp(12px, 2.5vw, 20px); margin-bottom: clamp(15px, 3vw, 25px); border-radius: clamp(0.5rem, 1vw, 1rem); box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-style: italic; opacity: 0; animation: ${animate ? 'slideUp 0.8s ease forwards' : 'none'}; }

        /* CTA */
        .cta-section { text-align: center; margin-top: clamp(50px, 5vw, 70px); }
        .cta-btn { padding: clamp(10px, 2vw, 16px) clamp(20px, 4vw, 30px); background: #ff7f50; color: white; border: none; border-radius: clamp(0.25rem, 0.5vw, 0.5rem); font-size: clamp(1rem, 2vw, 1.2rem); font-weight: bold; cursor: pointer; transition: background 0.2s ease, transform 0.15s ease; }
        .cta-btn:hover { background: #ff5722; transform: translateY(-2px) scale(1.03); }

        /* Animations */
        @keyframes fadeSlideUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes scaleFade {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slideUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 900px) { .service-card, .service-card.reverse { flex-direction: column; text-align: center; } .service-image-wrapper, .service-text { min-width: 90%; } }
      `}</style>

      <div className="services-wrapper">
        <div className="services-container">
          <h1>Our Services</h1>
          <p>We provide a wide range of technology solutions to help your business grow.</p>

          {/* Services Layout */}
          <div className="services-layout">
            {services.map((service, index) => (
              <div className={`service-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <h2>Why Choose Us</h2>
          <div className="features-section">
            {features.map((f, index) => (
              <div className="feature-card" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <span>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>

          {/* Packages Section */}
          <h2>Our Packages</h2>
          <div className="packages-section">
            {packages.map((pkg, index) => (
              <div className="package-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <h3>{pkg.name}</h3>
                <p>{pkg.price}</p>
                <ul>
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>• {feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <h2>Testimonials</h2>
          <div className="testimonials-section">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
                "{t.feedback}" - <strong>{t.name}</strong>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <button className="cta-btn">Contact Us for Your Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;