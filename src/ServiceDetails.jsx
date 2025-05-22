import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const serviceData = {
  "civil-engineer": { title: "Civil Engineer", description: "Expert in construction and infrastructure projects.", image: "civil.jpg" },
  "planning-engineer": { title: "Planning Engineer", description: "Specialist in project scheduling and resource management.", image: "planning.jpg" },
  "piping-engineer": { title: "Piping Engineer", description: "Designs and oversees piping systems for industrial projects.", image: "piping.jpg" },
  "rotating-equipment": { title: "Rotating Equipment Engineer", description: "Handles maintenance and operation of rotating machinery.", image: "rotating.jpg" },
  "site-supervisor": { title: "Site Supervisor", description: "Manages on-site operations and workforce coordination.", image: "supervisor.jpg" },
  "officers": { title: "Officers", description: "Administrative professionals ensuring smooth operations.", image: "officers.jpg" },
  "executive-secretaries": { title: "Executive Secretaries", description: "Provides high-level administrative support.", image: "secretaries.jpg" },
  "documents-controller": { title: "Documents Controller", description: "Manages project documentation and compliance.", image: "documents.jpg" },
  "computer-programmers": { title: "Computer Programmers", description: "Develops software solutions for various applications.", image: "programmers.jpg" },
  "schedulers": { title: "Schedulers", description: "Plans and organizes project timelines efficiently.", image: "schedulers.jpg" },
  "mechanical-engineer": { title: "Mechanical Engineer", description: "Designs and maintains mechanical systems.", image: "mechanical.jpg" },
  "electrical-engineer": { title: "Electrical Engineer", description: "Expert in electrical systems and power distribution.", image: "electrical.jpg" },
  "qc-inspector": { title: "Quality Control Inspector", description: "Ensures compliance with industry standards.", image: "qc.jpg" },
  "project-superintendent": { title: "Project Superintendent", description: "Oversees project execution and team coordination.", image: "superintendent.jpg" },
  "safety-engineers": { title: "Safety Engineers", description: "Implements safety protocols and risk management.", image: "safety.jpg" },
  "auto-cad-operator": { title: "Auto-CAD Operator", description: "Creates technical drawings for engineering projects.", image: "autocad.jpg" },
  "accountant": { title: "Accountant", description: "Manages financial records and budgeting.", image: "accountant.jpg" },
  "computer-operator": { title: "Computer Operator", description: "Handles IT systems and data processing.", image: "computer.jpg" },
  "system-administrators": { title: "System Administrators", description: "Maintains and secures IT infrastructure.", image: "sysadmin.jpg" },
  "project-controllers": { title: "Project Controllers", description: "Monitors project progress and financials.", image: "controllers.jpg" },
  "riggers": { title: "Riggers", description: "Handles lifting and rigging operations.", image: "riggers.jpg" },
  "operators": { title: "Operators (Crane, Forklift)", description: "Operates heavy machinery for construction.", image: "operators.jpg" },
  "skilled-labours": { title: "Skilled Labours", description: "Experienced workers in specialized trades.", image: "skilled.jpg" },
  "semi-skilled-labours": { title: "Semi-skilled Labours", description: "Workers with basic technical expertise.", image: "semi-skilled.jpg" },
  "work-permit-receiver": { title: "Work Permit Receiver", description: "Manages work permits and compliance.", image: "permit.jpg" }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceData[id];

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <img src={`/images/${service.image}`} alt={service.title} />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;