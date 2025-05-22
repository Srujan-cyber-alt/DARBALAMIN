import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const servicesList = [
  { id: "civil-engineer", title: "Civil Engineer", description: "Expert in construction and infrastructure projects." },
  { id: "planning-engineer", title: "Planning Engineer", description: "Specialist in project scheduling and resource management." },
  { id: "piping-engineer", title: "Piping Engineer", description: "Designs and oversees piping systems for industrial projects." },
  { id: "rotating-equipment", title: "Rotating Equipment Engineer", description: "Handles maintenance and operation of rotating machinery." },
  { id: "site-supervisor", title: "Site Supervisor", description: "Manages on-site operations and workforce coordination." },
  { id: "officers", title: "Officers", description: "Administrative professionals ensuring smooth operations." },
  { id: "executive-secretaries", title: "Executive Secretaries", description: "Provides high-level administrative support." },
  { id: "documents-controller", title: "Documents Controller", description: "Manages project documentation and compliance." },
  { id: "computer-programmers", title: "Computer Programmers", description: "Develops software solutions for various applications." },
  { id: "schedulers", title: "Schedulers", description: "Plans and organizes project timelines efficiently." },
  { id: "mechanical-engineer", title: "Mechanical Engineer", description: "Designs and maintains mechanical systems." },
  { id: "electrical-engineer", title: "Electrical Engineer", description: "Expert in electrical systems and power distribution." },
  { id: "qc-inspector", title: "Quality Control Inspector", description: "Ensures compliance with industry standards." },
  { id: "project-superintendent", title: "Project Superintendent", description: "Oversees project execution and team coordination." },
  { id: "safety-engineers", title: "Safety Engineers", description: "Implements safety protocols and risk management." },
  { id: "auto-cad-operator", title: "Auto-CAD Operator", description: "Creates technical drawings for engineering projects." },
  { id: "accountant", title: "Accountant", description: "Manages financial records and budgeting." },
  { id: "computer-operator", title: "Computer Operator", description: "Handles IT systems and data processing." },
  { id: "system-administrators", title: "System Administrators", description: "Maintains and secures IT infrastructure." },
  { id: "project-controllers", title: "Project Controllers", description: "Monitors project progress and financials." },
  { id: "riggers", title: "Riggers", description: "Handles lifting and rigging operations." },
  { id: "operators", title: "Operators (Crane, Forklift)", description: "Operates heavy machinery for construction." },
  { id: "skilled-labours", title: "Skilled Labours", description: "Experienced workers in specialized trades." },
  { id: "semi-skilled-labours", title: "Semi-skilled Labours", description: "Workers with basic technical expertise." },
  { id: "work-permit-receiver", title: "Work Permit Receiver", description: "Manages work permits and compliance." }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <h1>Our Services</h1>
        <div className="services-list">
          {servicesList.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`} 
              className="service-card"
            >
              <div className="card-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;