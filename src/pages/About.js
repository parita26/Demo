import React from 'react';

function About() {
  const timeline = [
    { year: 2010, event: 'Company founded with 3 team members.' },
    { year: 2013, event: 'Launched first client project for e-commerce.' },
    { year: 2016, event: 'Expanded globally, opening offices in Europe.' },
    { year: 2019, event: 'Delivered 300+ projects worldwide.' },
    { year: 2023, event: 'Awarded Best Technology Innovator 2023.' }
  ];

  const testimonials = [
    { name: 'Alice Brown', text: 'Techstrota transformed our digital presence. Highly recommend!', role: 'CEO, Startup Inc.' },
    { name: 'David Lee', text: 'Professional team with amazing support and innovative solutions.', role: 'CTO, TechCorp' }
  ];

  const partners = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const achievements = [
    'Best Tech Startup Award 2015',
    'Top 100 Global Innovators 2018',
    'Best Client Service 2020',
    'Technology Innovator Award 2023'
  ];

  const competencies = [
    'Custom Software Solutions',
    'Scalable Cloud Architectures',
    'Data-driven Insights',
    'Cutting-edge Design & UX',
    'Agile & Efficient Delivery'
  ];

  return (
    <div>
      <style>{`
        .about-wrapper { background-color: #f9f9f9; min-height: 100vh; padding: clamp(15px,4vw,50px); box-sizing: border-box;}
        .about-container { font-family: Arial,sans-serif; color:#333; width:90%; max-width: clamp(300px,90%,1200px); margin:auto; box-sizing:border-box; }

        /* HERO */
        .about-hero { text-align:center; background: linear-gradient(135deg,#ff7f50,#ff5722); color:#fff; padding: clamp(30px,6vw,80px) clamp(15px,4vw,40px); border-radius: clamp(0.5rem,1vw,1rem); margin-bottom: clamp(20px,4vw,50px);}
        .about-hero h1 { font-size: clamp(1.8rem,5vw,3rem); margin-bottom: clamp(10px,2vw,15px);}
        .about-hero p { font-size: clamp(1rem,2.5vw,1.2rem); max-width:700px; margin:auto; line-height:1.6;}

        /* SECTIONS */
        .about-section { background:#fff; padding:clamp(20px,4vw,35px); margin-bottom: clamp(15px,3vw,30px); border-radius: clamp(0.5rem,1vw,1rem); box-shadow:0 6px 18px rgba(0,0,0,0.08); transition: transform 0.2s ease;}
        .about-section:hover { transform: translateY(-3px);}
        .about-section h2 { font-size: clamp(1.3rem,3vw,1.8rem); margin-bottom: clamp(8px,2vw,15px);}
        .about-section p { font-size: clamp(0.95rem,2.5vw,1.1rem); line-height:1.7;}
        .about-values ul, .why-choose-us ul, .services ul, .competencies ul, .achievements ul { margin-top: clamp(10px,2vw,15px); padding-left:20px;}
        .about-values li, .why-choose-us li, .services li, .competencies li, .achievements li { margin-bottom: clamp(8px,1.5vw,12px); font-size: clamp(0.9rem,2.3vw,1rem); line-height:1.6;}

        /* TEAM */
        .team-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap: clamp(15px,3vw,25px); margin-top: clamp(20px,4vw,40px);}
        .team-member { background:#fff; border-radius: clamp(0.5rem,1vw,1rem); padding: clamp(15px,3vw,25px); text-align:center; box-shadow:0 4px 15px rgba(0,0,0,0.08); transition: transform 0.25s ease, box-shadow 0.25s ease;}
        .team-member:hover { transform: translateY(-5px); box-shadow:0 8px 20px rgba(0,0,0,0.15);}
        .team-member img { width: clamp(100px,20vw,150px); height: clamp(100px,20vw,150px); border-radius:50%; object-fit:cover; margin-bottom:10px;}
        .team-member h3 { font-size: clamp(1.1rem,2.5vw,1.4rem); margin-bottom:5px;}
        .team-member p { font-size: clamp(0.85rem,2vw,1rem); color:#555; margin:0;}

        /* TIMELINE */
        .timeline { display:flex; flex-direction:column; gap: clamp(15px,3vw,25px);}
        .timeline-item { background:#fff; padding: clamp(15px,2.5vw,25px); border-radius: clamp(0.5rem,1vw,1rem); box-shadow:0 4px 12px rgba(0,0,0,0.08);}
        .timeline-item h4 { margin:0; font-size: clamp(1rem,2vw,1.3rem); color:#ff5722;}
        .timeline-item p { margin:5px 0 0; font-size: clamp(0.9rem,2vw,1rem); color:#555;}

        /* TESTIMONIALS */
        .testimonials { display:grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap: clamp(15px,3vw,25px);}
        .testimonial-card { background:#fff; padding: clamp(15px,2.5vw,25px); border-radius: clamp(0.5rem,1vw,1rem); box-shadow:0 4px 12px rgba(0,0,0,0.08);}
        .testimonial-card p { font-size: clamp(0.9rem,2vw,1rem); margin-bottom:10px; color:#555;}
        .testimonial-card h4 { font-size: clamp(1rem,2vw,1.3rem); margin:0; color:#333;}
        .testimonial-card span { font-size: clamp(0.85rem,1.8vw,0.95rem); color:#777;}

        /* PARTNERS */
        .partners { display:flex; flex-wrap:wrap; gap: clamp(15px,3vw,25px); justify-content:center; align-items:center; margin-top: clamp(20px,4vw,40px);}
        .partner-logo { max-width: clamp(80px,15vw,150px); max-height: clamp(40px,10vw,70px); object-fit:contain; filter:grayscale(80%); transition: filter 0.3s ease;}
        .partner-logo:hover { filter:grayscale(0%); }

        @media(max-width:500px){
          .about-wrapper{padding:clamp(15px,5vw,25px);}
          .about-hero{padding:clamp(20px,5vw,50px) clamp(10px,5vw,20px);}
          .about-hero h1{font-size:clamp(1.5rem,6vw,2rem);}
          .about-hero p{font-size:clamp(0.85rem,3vw,1rem);}
          .about-section{padding:clamp(15px,4vw,25px);}
          .about-section h2{font-size:clamp(1.1rem,4vw,1.5rem);}
          .about-section p,.about-values li,.why-choose-us li,.services li,.competencies li,.achievements li{font-size:clamp(0.85rem,3vw,0.95rem);}
          .team-member img{width:100px;height:100px;}
        }
      `}</style>

      <div className="about-wrapper">
        <div className="about-container">

          {/* Hero Section */}
          <section className="about-hero">
            <h1>About Techstrota Company</h1>
            <p>We deliver innovative technology solutions that help businesses grow and succeed globally.</p>
          </section>

          {/* Mission */}
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>To empower businesses with cutting-edge tech solutions, exceptional support, and innovative strategies.</p>
          </section>

          {/* Vision */}
          <section className="about-section">
            <h2>Our Vision</h2>
            <p>To be the most trusted technology partner globally, known for innovation and client-focused solutions.</p>
          </section>

          {/* History */}
          <section className="about-section">
            <h2>Our History</h2>
            <p>Founded in 2010, Techstrota has grown from a small startup into a global technology solutions provider.</p>
          </section>

          {/* Timeline */}
          <section className="about-section">
            <h2>Company Timeline</h2>
            <div className="timeline">
              {timeline.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <h4>{item.year}</h4>
                  <p>{item.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="about-section services">
            <h2>Our Services</h2>
            <ul>
              {services.map((service, idx) => <li key={idx}>{service}</li>)}
            </ul>
          </section>

          {/* Core Competencies */}
          <section className="about-section competencies">
            <h2>Our Core Competencies</h2>
            <ul>
              {competencies.map((comp, idx) => <li key={idx}>{comp}</li>)}
            </ul>
          </section>

          {/* Achievements */}
          <section className="about-section achievements">
            <h2>Achievements & Awards</h2>
            <ul>
              {achievements.map((award, idx) => <li key={idx}>{award}</li>)}
            </ul>
          </section>

          {/* Team */}
          <section className="about-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe"/>
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith"/>
                <h3>Jane Smith</h3>
                <p>CTO</p>
              </div>
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Mike Johnson"/>
                <h3>Mike Johnson</h3>
                <p>Lead Developer</p>
              </div>
              <div className="team-member">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sara Williams"/>
                <h3>Sara Williams</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="about-section">
            <h2>What Our Clients Say</h2>
            <div className="testimonials">
              {testimonials.map((testi, idx) => (
                <div className="testimonial-card" key={idx}>
                  <p>"{testi.text}"</p>
                  <h4>{testi.name}</h4>
                  <span>{testi.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Partners */}
          <section className="about-section">
            <h2>Our Partners</h2>
            <div className="partners">
              {partners.map((partner, idx) => (
                <img key={idx} className="partner-logo" src={partner.logo} alt={partner.name} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default About;