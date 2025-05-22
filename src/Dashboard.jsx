import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = useRef([]);

  // Company data
  const companyInfo = {
    name: "DAR ALAMIN CONTRACTING COMPANY",
    
    locations: ["DAMMAM"],
    description: "A leading contracting and manpower solutions provider in Saudi Arabia, delivering excellence in workforce management and project execution with ISO-certified standards and a commitment to Vision 2030.",
    mission: "To provide exceptional workforce solutions that power Saudi Arabia's infrastructure development while ensuring the highest standards of quality, safety, and professionalism."
  };

  const services = [
    {
      title: "Skilled Labor Supply",
      description: "Certified skilled workers for construction and industrial projects with rigorous training programs",
      icon: "👷",
      image: "https://images.unsplash.com/photo-1581093450023-4a6dd42f1a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Technical Staffing",
      description: "Engineers, supervisors, and technical experts for specialized project requirements",
      icon: "👨‍💻",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Facility Management",
      description: "Comprehensive manpower solutions for facility operations and maintenance services",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Recruitment Solutions",
      description: "End-to-end recruitment services tailored to your specific staffing needs",
      icon: "📋",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Project Management",
      description: "Complete workforce management for large-scale construction projects",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Training & Development",
      description: "Specialized training programs to enhance workforce skills and safety",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const beliefs = [
    {
      quote: "Quality in manpower is the foundation of successful projects and national development",
      author: "CEO, Dar Alamin",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      quote: "Our workers are our greatest asset and the pride of our organization",
      author: "HR Director",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      quote: "Safety and professionalism in every deployment is our non-negotiable standard",
      author: "Operations Manager",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const slides = [
    { 
      image: "https://i0.wp.com/www.saudigulfprojects.com/wp-content/uploads/2021/11/ADNOC.jpg?fit=795%2C454&ssl=1",
      title: "Building Saudi Arabia's Future",
      subtitle: "Premium contracting and manpower solutions aligned with Vision 2030"
    },
    { 
      image: "https://vid.alarabiya.net/images/2020/04/23/90f04a5d-b7ab-4d91-ae16-8a7e25702c21/90f04a5d-b7ab-4d91-ae16-8a7e25702c21.jpg?crop=4:3&width=1200",
      title: "Trusted Workforce Partner",
      subtitle: "Serving major projects across the Kingdom "
    },
    { 
      image: "https://t3.ftcdn.net/jpg/03/34/27/20/360_F_334272046_ODR9syMSewUiv9iJrRSdbA5bwLucPPSd.jpg",
      title: "Excellence in Manpower Services",
      subtitle: "ISO-certified standards with a workforce of  professionals"
    }
  ];

  // Auto slide transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    sections.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <div className="dashboard">
      {/* Floating Navigation */}
      <nav className="floating-nav">
        <div className="nav-logo">
          <span className="logo-highlight">DAR</span> ALAMIN
        </div>
        <button 
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="nav-cta">Get Started</button>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <section className="hero-slideshow">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <h1 data-aos="fade-up">{slide.title}</h1>
              <p data-aos="fade-up" data-aos-delay="200">{slide.subtitle}</p>
              <button className="cta-button" data-aos="fade-up" data-aos-delay="400">
                <span>Explore Our Services</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll to Discover</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="section discover-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Discover</h2>
            <h3 data-aos="fade-up" data-aos-delay="100">{companyInfo.name}</h3>
            <p data-aos="fade-up" data-aos-delay="200">{companyInfo.mission}</p>
          </div>
          
          <div className="content-grid">
            <div className="text-content">
              <p data-aos="fade-up">{companyInfo.description}</p>
              
              <div className="stats" data-aos="fade-up" data-aos-delay="200">
                <div className="stat-item">
                  <span className="number">{companyInfo.established}</span>
                  <span className="label">Established</span>
                </div>
                <div className="stat-item">
                  <span className="number">{companyInfo.employees}</span>
                  <span className="label">Employees</span>
                </div>
                <div className="stat-item">
                  <span className="number">{companyInfo.projects}</span>
                  <span className="label">Projects</span>
                </div>
              </div>
              
              <button className="outline-button" data-aos="fade-up" data-aos-delay="300">
                Learn More About Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="image-content" data-aos="fade-left">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Dar Alamin Company Site" 
                  loading="lazy"
                />
                <div className="image-badge">
                  <span>ISO 9001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" id="services" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Our Manpower Services</h2>
            <p data-aos="fade-up" data-aos-delay="100">Comprehensive workforce solutions tailored to Saudi Arabia's growing infrastructure needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="section-footer" data-aos="fade-up">
            <button className="cta-button">
              <span>Request a Consultation</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="section beliefs-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Our Core Values</h2>
            <p data-aos="fade-up" data-aos-delay="100">The principles that guide our operations and relationships</p>
          </div>
          
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => (
              <BeliefCard 
                key={index}
                quote={belief.quote}
                author={belief.author}
                image={belief.image}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Services */}
      <section className="section explore-section" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">Our Service Excellence</h2>
            <p data-aos="fade-up" data-aos-delay="100">Why leading companies in Saudi Arabia choose Dar Alamin</p>
          </div>
          
          <div className="explore-content">
            <div className="explore-text">
              <div className="feature-list">
                <div className="feature-item" data-aos="fade-up">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Rigorous Selection</h4>
                    <p>Comprehensive screening and verification process for all workers</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Continuous Training</h4>
                    <p>Ongoing skills development and safety training programs</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>Compliance Assurance</h4>
                    <p>Full compliance with Saudi labor laws and regulations</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>24/7 Support</h4>
                    <p>Dedicated account managers and round-the-clock support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="explore-images" data-aos="fade-left">
              <div className="image-stack">
                <img 
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Construction Workers" 
                  className="stack-image-1"
                  loading="lazy"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Industrial Site" 
                  className="stack-image-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section about-section" id="about" ref={addToRefs}>
        <div className="container">
          <div className="section-header">
            <h2 data-aos="fade-up">About Dar Alamin</h2>
            <p data-aos="fade-up" data-aos-delay="100">Our journey and commitment to Saudi Arabia's development</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3 data-aos="fade-up">Building Workforce Excellence Since {companyInfo.established}</h3>
              <p data-aos="fade-up" data-aos-delay="100">From our humble beginnings as a local workforce provider, Dar Alamin has grown to become one of Saudi Arabia's most trusted manpower partners, serving major projects that contribute to the Kingdom's Vision 2030 objectives.</p>
              
              <div className="achievements" data-aos="fade-up" data-aos-delay="200">
                <div className="achievement-item">
                  <span className="achievement-number"></span>
                  <span className="achievement-label"></span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">98%</span>
                  <span className="achievement-label">Client Retention</span>
                </div>
              </div>
              
              <div className="locations" data-aos="fade-up" data-aos-delay="300">
                <h4>Our Nationwide Presence:</h4>
                <div className="location-tags">
                  {companyInfo.locations.map((location, index) => (
                    <span key={index} className="location-tag">
                      {location}
                      {index === 0 && <span className="tag-badge">Headquarters</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-image" data-aos="fade-left">
              <div className="image-wrapper">
                <img 
                  src="https://t3.ftcdn.net/jpg/07/05/31/18/360_F_705311884_6w23VZEID5TbUFOzTsXT8CadLl3eOxZr.jpg" 
                  alt="Dar Alamin Team" 
                  loading="lazy"
                />
                <div className="image-caption">
                  Our management team at the annual safety excellence awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section" id="contact" ref={addToRefs}>
        <div className="container">
          <div className="cta-content">
            <h2 data-aos="fade-up">Ready to Partner With Us?</h2>
            <p data-aos="fade-up" data-aos-delay="100">Contact our team today to discuss your manpower needs and how we can support your projects</p>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
              <button className="cta-button">
                <span>Get a Quote</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="outline-button">
                <span>Call Our Team</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer" ref={addToRefs}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo" data-aos="fade-up">
              <h3><span className="logo-highlight">DAR</span> ALAMIN CONTRACTING COMPANY</h3>
              <p>Workforce Excellence in Saudi Arabia</p>
              
              <div className="social-links">
                <a href="#" aria-label="LinkedIn" data-aos="fade-up" data-aos-delay="100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" data-aos="fade-up" data-aos-delay="150">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" data-aos="fade-up" data-aos-delay="200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group" data-aos="fade-up" data-aos-delay="100">
                <h4>Services</h4>
                <a href="#">Labor Supply</a>
                <a href="#">Technical Staffing</a>
                <a href="#">Facility Management</a>
                <a href="#">Training Programs</a>
              </div>
              
              <div className="link-group" data-aos="fade-up" data-aos-delay="200">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Our Values</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
            </div>
            
            <div className="footer-contact" data-aos="fade-up" data-aos-delay="300">
              <h4>Contact Us</h4>
              <p> Infoalduraa@gmail.com</p>
              <p>+00966558563157</p>
              <p>C3VX+92Mترا, شارع الملك سعود، حي الدواسر, Al Dawasir, Dammam 32416<br />DAMMAM, Saudi Arabia</p>
            </div>
          </div>
          
          <div className="footer-bottom" data-aos="fade-up">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} Dar Alamin Contracting Company. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ title, description, icon, image, delay }) => {
  return (
    <div 
      className="service-card"
      style={{ 
        backgroundImage: `linear-gradient(rgba(10, 61, 98, 0.8), rgba(10, 61, 98, 0.8)), url(${image})`,
        animationDelay: `${delay}ms`
      }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-link">
        Learn More 
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

const BeliefCard = ({ quote, author, image, delay }) => {
  return (
    <div 
      className="belief-card"
      style={{ animationDelay: `${delay}ms` }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="belief-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="image-overlay"></div>
      </div>
      <div className="belief-content">
        <blockquote>"{quote}"</blockquote>
        <cite>- {author}</cite>
      </div>
    </div>
  );
};

export default Dashboard;