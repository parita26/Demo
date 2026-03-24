import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <div className="container">
      {/* Hero Section - Two Column Layout */}
      <section className={`hero ${animate ? 'animate-zoomIn' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Techstrota Company</h1>
            <p>
              We create innovative solutions that help your business grow
              and thrive in the digital world.
            </p>
            <button className="hero-button" onClick={handleClick}>
              Get Started Today
            </button>
          </div>

          <div className="hero-image-container">
            <img
              src="/images/home/img1.jpg"
              alt="AI Technology"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .container {
          font-family: Arial, sans-serif;
          color: #333;
          padding: clamp(1rem, 3vw, 2rem);
          background-color: #f9f9f9;
          min-height: 100vh;
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }

        /* Hero Section */
        .hero {
          background-color: #fff; /* Changed background to white */
          color: #333; /* Dark text for readability */
          padding: clamp(2rem, 6vw, 5rem);
          border-radius: clamp(0.5rem, 1vw, 1rem);
          margin-bottom: clamp(2rem, 5vw, 4rem);
        }

        .hero-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: clamp(2rem, 4vw, 3rem);
          flex-wrap: wrap; /* Makes it responsive */
        }

        .hero-text {
          flex: 1 1 400px;
          min-width: 300px;
        }

        .hero-text h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
        }

        .hero-text p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          margin-bottom: clamp(1.5rem, 3vw, 2rem);
        }

        .hero-button {
          padding: clamp(0.5rem, 1.5vw, 1rem) clamp(1rem, 4vw, 2rem);
          font-size: clamp(1rem, 2vw, 1.2rem);
          background-color: #ff7f50; /* Orange button for contrast */
          color: #fff;
          border: none;
          border-radius: clamp(0.25rem, 0.5vw, 0.5rem);
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .hero-button:hover {
          transform: scale(1.05);
          background-color: #ff6333; /* Slightly darker on hover */
        }

        .hero-image-container {
          flex: 1 1 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 300px;
        }

        .hero-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: clamp(0.5rem, 1vw, 1rem);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        /* Animation */
        .animate-zoomIn {
          animation: zoomIn 1s ease forwards;
        }

        @keyframes zoomIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Responsive: stack on small screens */
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
          }

          .hero-image-container {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;