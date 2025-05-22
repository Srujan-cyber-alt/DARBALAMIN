import React, { useState, useEffect } from "react";
import "./Services.css";

const imageList = [
  "https://media.istockphoto.com/id/2138321447/photo/team-of-professional-experts-inspecting-unfinished-apartment-building.jpg?s=612x612&w=0&k=20&c=bwNPU2RBhn_qwc6xo-k_N8TqcYKJuqBb90xNbtpi-ew=",
  "https://media.istockphoto.com/id/846306994/photo/male-project-superintendent-discussing-plans-with-foreman-at-construction-site.jpg?s=612x612&w=0&k=20&c=pe63rxkW6PZOyFYOyW5Lu6GX3S4heu_jOZmJs5Ae25U=",
];

const ProjectSuperintendent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="service-page">
      <div className="slideshow">
        <img src={imageList[currentIndex]} alt="Project Superintendent Work" />
      </div>

      <div className="text-section">
        <h1>Project Superintendent Services</h1>
        <p>We oversee construction projects, ensuring timelines are met and budgets are managed efficiently.</p>
        <p>Expertise includes contractor supervision, site management, and project execution.</p>
      </div>
    </div>
  );
};

export default ProjectSuperintendent;