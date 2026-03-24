import React, { useState } from 'react';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Built a full-featured e-commerce platform with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop',
      category: 'Web Development',
      client: 'Shopify Store',
      year: '2023',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'Mobile App Development',
      description: 'Created a cross-platform mobile app for a startup using React Native.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=500&fit=crop',
      category: 'Mobile App',
      client: 'Startup X',
      year: '2022',
      tech: ['React Native', 'Firebase', 'Redux']
    },
    {
      title: 'Corporate Website Redesign',
      description: 'Revamped the website for a corporate client with modern UI/UX.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
      category: 'Web Design',
      client: 'Global Corp',
      year: '2023',
      tech: ['HTML', 'CSS', 'JavaScript', 'Figma']
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Web Design'];

  const clients = [
    { name: 'Acme Corp', logo: 'https://via.placeholder.com/120x60?text=Acme' },
    { name: 'InnovateX', logo: 'https://via.placeholder.com/120x60?text=InnovateX' },
    { name: 'Tech Solutions', logo: 'https://via.placeholder.com/120x60?text=Tech+Solutions' },
  ];

  const testimonials = [
    { name: 'John Doe', feedback: 'Techstrota delivered our project on time with amazing quality!' },
    { name: 'Jane Smith', feedback: 'Excellent team, very professional, highly recommend.' },
  ];

  return (
    <div>
      <style>{`
        .portfolio-wrapper { background: #f9f9f9; min-height: 100vh; padding: clamp(15px, 4vw, 50px); box-sizing: border-box; font-family: Arial, sans-serif; }
        .portfolio-container { color: #333; width: 90%; max-width: clamp(300px, 90%, 1200px); margin: auto; text-align: center; }
        .portfolio-container h1 { font-size: clamp(1.8rem, 5vw, 2.8rem); margin-bottom: clamp(10px, 2vw, 15px); }
        .portfolio-container p { margin-bottom: clamp(25px, 4vw, 40px); color: #555; font-size: clamp(0.95rem, 2.5vw, 1.2rem); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: clamp(15px, 3vw, 30px); margin-bottom: clamp(50px, 5vw, 70px); }
        .project-card { background: #fff; border-radius: clamp(0.5rem, 1vw, 1rem); box-shadow: 0 6px 18px rgba(0,0,0,0.08); overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; display: flex; flex-direction: column; cursor: pointer; }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
        .project-image { width: 100%; height: clamp(160px, 25vw, 220px); object-fit: cover; }
        .project-content { padding: clamp(12px, 2.5vw, 18px); }
        .project-card h3 { margin-bottom: clamp(6px, 1.5vw, 12px); font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
        .project-card p { color: #555; font-size: clamp(0.9rem, 2vw, 1rem); margin: 0.2rem 0; }
        .project-meta { font-size: clamp(0.8rem, 1.8vw, 0.95rem); color: #777; }
        .project-tech { margin-top: 8px; font-size: clamp(0.8rem, 1.8vw, 0.95rem); color: #ff7f50; }

        .categories { display: flex; justify-content: center; gap: clamp(10px, 3vw, 20px); margin-bottom: clamp(30px, 5vw, 50px); }
        .category-btn { padding: clamp(6px, 1.5vw, 10px) clamp(12px, 3vw, 20px); border: 1px solid #ff7f50; border-radius: clamp(0.25rem, 0.5vw, 0.5rem); background: white; color: #ff7f50; cursor: pointer; font-weight: bold; transition: background 0.2s ease, color 0.2s ease; }
        .category-btn:hover, .category-btn.active { background: #ff7f50; color: white; }

        .clients-section { margin-top: clamp(40px, 5vw, 60px); }
        .clients-grid { display: flex; justify-content: center; flex-wrap: wrap; gap: clamp(20px, 5vw, 40px); align-items: center; }
        .client-logo { width: clamp(100px, 15vw, 150px); filter: grayscale(100%); transition: filter 0.2s ease; }
        .client-logo:hover { filter: grayscale(0%); }

        .testimonials-section { margin-top: clamp(50px, 5vw, 70px); }
        .testimonial-card { background: #fff; padding: clamp(12px, 2.5vw, 20px); margin-bottom: clamp(15px, 3vw, 25px); border-radius: clamp(0.5rem, 1vw, 1rem); box-shadow: 0 4px 12px rgba(0,0,0,0.08); font-style: italic; }

        .cta-section { text-align: center; margin-top: clamp(50px, 5vw, 70px); }
        .cta-btn { padding: clamp(10px, 2vw, 16px) clamp(20px, 4vw, 30px); background: #ff7f50; color: white; border: none; border-radius: clamp(0.25rem, 0.5vw, 0.5rem); font-size: clamp(1rem, 2vw, 1.2rem); font-weight: bold; cursor: pointer; transition: background 0.2s ease, transform 0.15s ease; }
        .cta-btn:hover { background: #ff5722; transform: translateY(-2px); }

        /* Modal */
        .modal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; z-index:1000; }
        .modal-content { background:#fff; padding: clamp(20px, 4vw, 40px); border-radius: clamp(0.5rem, 1vw, 1rem); max-width: 600px; width: 90%; position: relative; text-align:left; }
        .modal-close { position:absolute; top: 10px; right: 15px; cursor:pointer; font-size: 1.5rem; color:#ff7f50; }
        .modal-tech { margin-top: 10px; color:#ff7f50; font-weight:bold; }
      `}</style>

      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <p>Here are some of the projects we have delivered for our clients.</p>

          {/* Categories */}
          <div className="categories">
            {categories.map((cat, index) => (
              <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-meta">
                    Client: {project.client} | Year: {project.year} | Category: {project.category}
                  </p>
                  <p className="project-tech">Tech: {project.tech.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clients Logos */}
          <div className="clients-section">
            <h2>Our Clients </h2>
            <h2>Alice Brown </h2>
            
            <div className="clients-grid">
              {clients.map((client, index) => (
                <img key={index} src={client.logo} alt={client.name} className="client-logo" />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-section">
            <h2>Client Testimonials</h2>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                "{t.feedback}" - <strong>{t.name}</strong>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="cta-section">
            <button className="cta-btn">Contact Us for Your Project</button>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="modal-close" onClick={() => setSelectedProject(null)}>&times;</span>
              <h2>{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
              <p>{selectedProject.description}</p>
              <p className="project-meta">
                Client: {selectedProject.client} | Year: {selectedProject.year} | Category: {selectedProject.category}
              </p>
              <p className="modal-tech">Technologies Used: {selectedProject.tech.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;